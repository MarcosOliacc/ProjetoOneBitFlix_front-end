'use client'
import authService from "@/services/authService"
import styles from "@/styles/register.module.scss"
import { FormEvent, useState } from 'react'
import { useRouter } from "next/navigation"
import ToastComponent from "../common/toast"

function LoginForm() {
    const router = useRouter()
    const [toastOpen, setToastOpen] = useState(false)
    const [toastMsg, setToastMsg] = useState("")
    const [color, setColor] = useState('')
    async function loginUser(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
    }

    return(
        <>
            <ToastComponent color={color} isOpen={toastOpen} message={toastMsg}/>
            <form className={styles.formContent2} onSubmit={loginUser}>
                <div className={styles.group}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id='email' className={styles.input} placeholder='jhonDoe@email.com' required name="email"/>
                </div>
                <div className={styles.group}>
                        <label htmlFor="password">Senha</label>
                        <input type="text" id='password' className={styles.input} placeholder='Digite dua senha (min: 8 caracteres)' required minLength={8} maxLength={20} name="password"/>
                </div>
                <button type='submit' className={styles.formBtn}>ENTRAR</button>
            </form>        
        </>

    )
}

export default LoginForm