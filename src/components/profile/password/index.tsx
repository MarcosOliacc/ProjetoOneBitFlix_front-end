'use client'
import ToastComponent from '@/components/common/toast'
import { ProfileService } from '@/services/profileService'
import styles from '@/styles/profile.module.scss'
import { useRouter } from 'next/navigation'
import { useState, FormEvent } from 'react'
import useSWR from 'swr'
export default function PasswordForm() {
    const [token, setToken] = useState(()=> {
        if(typeof sessionStorage !== 'undefined') {
            const storage = sessionStorage.getItem('onebit-token')
            return storage
        } else { return null}
    })
    const router = useRouter()
    const [color, setColor] = useState('desable')
    const [message, setMessage] = useState('')
    const [p1,setp1] = useState('')
    const [p2,setp2] = useState('')
    const [p3,setp3] = useState('')

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const currentPassword = formData.get('password')!.toString()
        const newPassword = formData.get('newPass')!.toString()
        const reptPass = formData.get('reptPass')!.toString()
        if(newPassword !== reptPass) {
            setColor('falseAct')
            setTimeout(()=>{setColor('desable')}, 3000)
            setMessage('As novas senhas estão diferentes')
            return
        }
        if(newPassword === currentPassword) {
            setColor('falseAct')
            setTimeout(()=>{setColor('desable')}, 3000)
            setMessage('Senha atual é igual a nova senha')
            return
        }
        const res = await ProfileService.passwordUpdate(token, {currentPassword,newPassword})
        if(res === 400) {
            setColor('falseAct')
            setTimeout(()=>{setColor('desable')}, 3000)
            setMessage('Algo deu errado')
            return
        }
        if(res === 401) {
            setColor('falseAct')
            setTimeout(()=>{setColor('desable')}, 3000)
            setMessage('Senha atual incorreta')
            return
        }
        if(res === 204) {
            setColor('trueAct')
            setTimeout(()=>{setColor('desable')}, 3000)
            setMessage('Senha atualizada!')
            setp1('');setp2('');setp3('')
            return
        }
    }
    if(!token) {
        setTimeout(() => {
            router.push('/')
        }, 3000);
        return(<></>)
    }
    return(
        <>
            <ToastComponent color={color} message={message}/>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.groupContent}>
                    <div className={styles.formGroup}>
                        <label htmlFor="password" className={styles.label}>SENHA ATUAL</label>
                        <input type="password" 
                        id='password' 
                        className={styles.input}
                        name='password'
                        required
                        value={p1}
                        onChange={(event)=>(setp1(event.currentTarget.value))}
                        />
                    </div>
                </div>
                <div className={styles.groupContent}>
                    <div className={styles.formGroup}>
                        <label htmlFor="newPass" className={styles.label}>NOVA SENHA</label>
                        <input type="password" 
                        id='newPass' 
                        className={styles.input}
                        name='newPass'
                        required
                        minLength={8}
                        maxLength={20}
                        value={p2}
                        onChange={(event)=>(setp2(event.currentTarget.value))}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="reptPass" className={styles.label}>REPITA A SENHA</label>
                        <input type="password" 
                        id='reptPass' 
                        className={styles.input}
                        name='reptPass'
                        required
                        value={p3}
                        onChange={(event)=>(setp3(event.currentTarget.value))}
                        />
                    </div>
                </div>
                <button type='submit'className={styles.formBtn}>SALVAR ALTERAÇÕES</button>

            </form>
        </>
    )
}