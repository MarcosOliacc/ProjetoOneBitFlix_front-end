/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from './styles.module.scss'

interface props {
    logoUrl: string
    btnUrl: string
    btnContent: string
}

const HeaderGeneric = ({logoUrl,btnUrl,btnContent}: props)=> {
    return(
        <>
            <div className={styles.header}>
                <section className={styles.sect}>
                    <Link href={logoUrl}>
                        <img src="/logoOnebitflix.svg" alt="onebitLogo" className={styles.headerImg}/>
                    </Link>
                    <Link href={btnUrl}>
                        <button className={styles.headerBtn}>{btnContent}</button>
                    </Link>
                    
                </section>
            </div>
        </>
    )
}

export default HeaderGeneric