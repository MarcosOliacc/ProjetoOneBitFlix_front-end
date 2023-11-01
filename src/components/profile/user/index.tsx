/* eslint-disable @next/next/no-img-element */
'use client'
import ToastComponent from '@/components/common/toast'
import { ProfileService } from '@/services/profileService'
import styles from '@/styles/profile.module.scss'
import { FormEvent, useEffect, useState } from 'react'

const UserForm = () => {
    const [token, setToken] = useState(()=> {
        if(typeof sessionStorage !== 'undefined') {
            const storage = sessionStorage.getItem('onebit-token')
            return storage
        } else { return null}
    })
    const [color, setColor] = useState('')
    const [message, setMessage] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [created, setCreated] = useState('')

    useEffect(()=> {
        ProfileService.fetchCurrent(token).then((user)=> {
            setFirstName(user.firstName)
            setLastName(user.lastName)
            setPhone(user.phone)
            setEmail(user.email)
            setCreated(user.createdAt)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const handleUserUpdate = async (event:FormEvent<HTMLFormElement>)=> {
        event.preventDefault()
        const res = await ProfileService.userUpdate(token, {firstName, lastName, phone, email , createdAt: created})
        if(res === 200) {
            setColor('trueAct')
            setTimeout(()=>{setColor('desable')}, 3000)
            setMessage('Atualizado com sucesso!')
        } else {
            setColor('falseAct')
            setTimeout(()=>{setColor('desable')}, 3000)
            setMessage('Falha na atualização')
        }
    }

    

    return(
        <>  
            <ToastComponent color={color} message={message}/>
            <form onSubmit={handleUserUpdate} className={styles.form}>
                <div className={styles.userContent}>
                    <img src="/userProf.png" alt="userImg" className={styles.userImg}/>
                    <p className={styles.userName}>Nome do Usuario</p>
                </div>
                <div className={styles.formInfos}>
                    <img src="/profile/iconUserAccount.svg" alt="userImg" className={styles.formImg}/>
                    <p className={styles.userTime}>Membro desde <br /> 20 de Abril de 2020</p>
                </div>
                <hr />
                <div className={styles.groupContent}>
                    <div className={styles.formGroup}>
                        <label htmlFor="firstName" className={styles.label}>NOME</label>
                        <input type="text" 
                            name='firstName' 
                            id='firstName' 
                            placeholder='Qual o seu primeiro nome?' 
                            className={styles.inputF}
                            value={firstName} required
                            onChange={(event)=> setFirstName(event.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="lastName" className={styles.label}>SOBRENOME</label>
                        <input type="text" 
                            name='lastName' 
                            id='lastName' 
                            placeholder='Qual o seu último nome?' 
                            className={styles.inputF}
                            value={lastName} required
                            onChange={(event)=> setLastName(event.target.value)}
                        />
                    </div>                    
                </div>
                <div className={styles.groupContent}>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.label}>CELULAR</label>
                        <input type="number" 
                            name='phone' 
                            id='phone' 
                            placeholder='(xx) 9xxxx-xxxx' 
                            className={styles.inputF}
                            value={phone} required
                            onChange={(event)=> setPhone(event.target.value)}
                        />
                    </div>   
                </div>
                <div className={styles.groupContent}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>EMAIL</label>
                        <input type="email" 
                            name='email' 
                            id='email' 
                            placeholder='jhonDoe@email.com' 
                            className={styles.inputF}
                            value={email} required
                            onChange={(event)=> setEmail(event.target.value)}
                        />
                    </div>                    
                </div>

                <button type='submit' className={styles.formBtn}>SALVAR ALTERAÇÕES</button>   
 

            </form>
        </>
    )
}
export default UserForm