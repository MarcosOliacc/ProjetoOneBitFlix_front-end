import Footer from '@/components/common/footer'
import HeaderGeneric from '@/components/common/headerGeneric'
import LoginForm from '@/components/loginForm'
import styles from'@/styles/register.module.scss'

const Login = ()=> {
    return(
        <main className={styles.main}>
            <HeaderGeneric logoUrl='/' btnUrl='/register' btnContent='Quero fazer parte' />
            <section className={styles.sect}>
                <div className={styles.head}>
                    <h2 className={styles.headTitle2}>BEM VINDO DE VOLTA!</h2>
                    <h2 className={styles.headTitle2}>RETORNE AOS ESTUDOS.</h2>
                </div>
                <LoginForm/>
            </section>
            <Footer/>
        </main>

    )
}
export default Login