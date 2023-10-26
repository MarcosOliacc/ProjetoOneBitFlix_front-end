/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

const Footer = () => {
    return(
        <>
            <section className={styles.sect}>
                <div className={styles.dev}>
                    <h4>CREATED BY - Marcos Oliveira</h4>
                    <h4>SOCIAL :</h4>
                    <div className={styles.social}>
                        <div className={styles.content}>
                            <img src="/linkedin.png" alt="linkedin" className={styles.socialImg}/>
                            <a href='https://www.linkedin.com/in/marcos-oliveira-733151291/' target='_blank' className={styles.socialLink}> - Linkedin</a>
                        </div>
                        <div className={styles.content}>
                            <img src="/github.png" alt="github" className={styles.socialImg}/>
                            <a href='https://github.com/MarcosOliacc' target='_blank' className={styles.socialLink}> - Github</a>
                        </div>
                        <div className={styles.content}>
                            <img src="instagram.png" alt="instagram" className={styles.socialImg}/>
                            <a href='https://www.instagram.com/vinixos1/' target='_blank' className={styles.socialLink}> - Instagram</a>
                        </div>                     
                    </div>
                </div>
                <div className={styles.oneBit}>
                    <img src="/logoOnebitcode.svg" alt="logoOnebitcode" className={styles.footerImg}/>
                    <a 
                        href="http://onebitcode.com" target='_blank' className={styles.footerLink}>ONEBITCODE.COM
                    </a>                
                </div>

            </section>
        </>
    )
}

export default Footer