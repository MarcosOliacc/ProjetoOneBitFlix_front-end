'use client'
import styles from "@/styles/profile.module.scss"
import UserForm from "../user"
import Footer from "@/components/common/footer"
import { useState } from 'react'
import PasswordForm from "../password"

export default function ProfileSection() {
    const [form, setForm] = useState('userData')
    return (
        <div className={styles.check}>
            <section className={styles.profSect}>
                <div className={styles.divConteiner}>
                    <p className={styles.title}>Minha Conta</p>
                    <div className={styles.divContent}>
                        <button className={styles.divBtn} onClick={()=>{setForm('userData')}}
                        style={{color: form === 'userData'? '#ff0044':'#fff'}}
                        >DADOS PESSOAIS</button>
                        <button className={styles.divBtn} onClick={()=>{setForm('userPassword')}}
                        style={{color: form === 'userPassword'? '#ff0044': '#fff'}}
                        >SENHA</button>
                    </div>
                </div>    
                <div className={styles.divContent}>
                    {form === 'userData'? <UserForm/>:<PasswordForm/>}
                    
                </div>
                
            </section>
            <Footer/>
        </div>
    )

}