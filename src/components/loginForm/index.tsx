'use client'
import authService from "@/services/authService"
import styles from "@/styles/register.module.scss"
import { FormEvent, useEffect, useState } from 'react'
import { useSearchParams, useRouter } from "next/navigation"
import ToastComponent from "../common/toast"

function LoginForm() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [toastMsg, setToastMsg] = useState('o')
    const [color, setColor] = useState('desable')
    const registerSuccess = searchParams.get('registred')

    useEffect(()=> {
        if(sessionStorage.getItem('onebit-token')) {
            router.push('/home')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=> {
        if(registerSuccess==='true') {
            setColor('trueAct')
            setTimeout(()=>{setColor('desable')}, 3000)
            setToastMsg('Cadastrado com sucesso!')
        }
    }, [registerSuccess])
    
    async function loginUser(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')!.toString()
        const password = formData.get('password')!.toString()
        const params = { email, password}
        const {status} = await authService.login(params)
        if(status === 200) {
            router.push('/home')
        } else {
            setColor('falseAct')
            setTimeout(()=>{setColor('desable')}, 3000)
            setToastMsg('Email ou senha incorretos!')
        }

    }

    return(
        <>
            <ToastComponent color={color} message={toastMsg}/>
            <form className={styles.formContent2} onSubmit={loginUser}>
                <div className={styles.group}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id='email' className={styles.input} placeholder='jhonDoe@email.com' required name="email"/>
                </div>
                <div className={styles.group}>
                        <label htmlFor="password">Senha</label>
                        <input type="text" id='password' className={styles.input} placeholder='Digite dua senha (min: 8 caracteres)' required name="password"/>
                </div>
                <button type='submit' className={styles.formBtn}>ENTRAR</button>
            </form>        
        </>

    )
}

export default LoginForm