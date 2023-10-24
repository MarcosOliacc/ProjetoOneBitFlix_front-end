/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from './style.module.scss'
import { Container, Button } from 'reactstrap'
const HeaderNoAuth = ()=> {
    return(
        <>
            <div className={styles.ctaSection}>
                <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta}/>
                <p>Se cadastre para ter acesso aos cursos</p>
                <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta}/>
            </div>
            <section className={styles.nav}>
                <img src="/logoOnebitflix.svg" alt="logo da OneBitFlix" className={styles.imgNav}/>
                <div className={styles.divBnts}>
                    <Link href='/login'><button className={styles.navBtn}>Entrar</button></Link>
                    <Link href='/register'><button className={styles.navBtn}>Quero fazer parte</button></Link>
                </div>
            </section>
        </>
    )
}
export default HeaderNoAuth