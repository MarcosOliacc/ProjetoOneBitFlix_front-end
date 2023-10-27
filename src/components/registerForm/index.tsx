'use client'
import authService from "@/services/authService"
import styles from "@/styles/register.module.scss"
import { FormEvent } from 'react'
import { useRouter } from "next/router"

function RegisterForm() {
    const router = useRouter()
    async function createUser(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const firstName = formData.get('firstName')!.toString()
        const lastName = formData.get('lastName')!.toString()
        const phone = formData.get('phone')!.toString()
        const birth = formData.get('birth')!.toString()
        const email = formData.get('email')!.toString()
        const password = formData.get('password')!.toString()
        const confPassword = formData.get('confPassword')!.toString()
        const params = {firstName, lastName, phone, birth, email, password }    
    
        if(password!== confPassword) {
            alert('As senhas não estão iguais')
            return 
        }
        const {status} = await authService.register(params)
    
        if(status === 201) {
            router.push('/login?registred=true')
        } else {
            alert('email ja existente')
        }
    }

    return(
        <form className={styles.formContent} onSubmit={createUser}>
            <div className={styles.groupContent}>
                <div className={styles.group}>
                    <label htmlFor="firstName">Nome</label>
                    <input 
                    type="text" id='firstName' 
                    className={styles.inputName} 
                    placeholder='Primeiro nome' required
                    name="firstName"
                    />
                </div>
                <div className={styles.group}>
                    <label htmlFor="lastName">Sobrenome</label>
                    <input type="text" id='lastName' className={styles.inputName} placeholder='Ultimo nome' required name="lastName"/>
                </div>
            </div>
            <div className={styles.groupContent}>
                <div className={styles.group}>
                    <label htmlFor="phone">Celular</label>
                    <input type="text" id='phone' className={styles.input} placeholder=' (xx) 9xxxx-xxxx' required minLength={11} name="phone"/>
                </div>
                <div className={styles.group}>
                    <label htmlFor="birth">Data de Nascimento</label>
                    <input
                        type="date"
                        id='birth'
                        name="birth"
                        className={styles.input}
                        placeholder='dd/mm/aaa'
                        required
                        min='1930-01-01'
                        max='2012-12-31'
                    />
                </div>
            </div>
            <div className={styles.group}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id='email' className={styles.input} placeholder='jhonDoe@email.com' required name="email"/>
            </div>
            <div className={styles.group}>
                    <label htmlFor="password">Senha</label>
                    <input type="text" id='password' className={styles.input} placeholder='Digite dua senha (min: 8 caracteres)' required minLength={8} maxLength={20} name="password"/>
            </div>
            <div className={styles.group}>
                    <label htmlFor="Rpassword">Confirme a senha</label>
                    <input type="text" id='Rpassword' className={styles.input} placeholder='Repita a sua senha' required name="confPassword"/>
            </div>
            <button type='submit' className={styles.formBtn}>CADASTRAR</button>
        </form>
    )
}

export default RegisterForm