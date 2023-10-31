import Footer from '@/components/common/footer'
import HeaderGeneric from '@/components/common/headerGeneric'
import styles from '@/styles/register.module.scss'
import RegisterForm from '@/components/registerForm'
import ToastComponent from '@/components/common/toast'


function Register() {
    return(

        <main className={styles.main}>
            <HeaderGeneric logoUrl='/' btnUrl='/login' btnContent='Quero fazer login'/>
            <section className={styles.sect}>
                <div className={styles.head}>
                    <h2 className={styles.headTitle}>CRIE JÁ SUA CONTA!</h2>
                    <h2 className={styles.headTitle}>É RAPIDO E FACIL.</h2>
                </div>
                <RegisterForm/>
            </section>
            <Footer/>
        </main>

    )
}
export default Register