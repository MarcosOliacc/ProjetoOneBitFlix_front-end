/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from './styles.module.scss'


const PresentationSect = () => {
    return(
        <>
            <section className={styles.sect}>
                <div className={styles.conteiner}>
                    <div className={styles.content}>
                        <p className={styles.subTitle}>ACESSO ILIMITADO</p>
                        <p className={styles.title}>Tenha acesso aos melhores <br/>cursos de programação</p>
                        <p className={styles.descrip}>Estude de onde estiver, a qualquer momento e continue <br/>evoluindo como programador</p>

                        <Link href='/register' className={styles.link}>
                            <button className={styles.navBtn}>
                                ACESSE AGORA 
                                <img src="/buttonPlay.svg" alt="ButtonPlay" className={styles.btnImg}/>
                            </button>
                        </Link>
                    </div>
                    <div className={styles.content}>
                        <img src="/homeNoAuth/imgPresentation.png" alt="imgPresentation" className={styles.presentImg}/>
                    </div>
                </div>
                <div className={styles.content2}>
                    <img src="/homeNoAuth/iconArrowDown.svg" alt="arrowDown" className={styles.arrowDown}/>
                </div>
            </section>
        </>
    )
}
export default PresentationSect