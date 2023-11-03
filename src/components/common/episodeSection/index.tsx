import { EpisodeType } from '@/services/courseService'
import styles from '@/styles/course.module.scss'

interface props {
    episodes: EpisodeType[]
}

export default function EpisodesSection({episodes}:props) {
    return(
        <>
            <section className={styles.sectEpisodes}>
                <div>
                    <p className={styles.listTitle}>LISTA DE EPISÓDIOS</p>
                    <div className={styles.lineEp}></div>
                    <p className={styles.listSub}>{episodes.length} episódios</p> 
                </div>
                
                <div className={styles.epContent}>
                    {episodes.map((ep:EpisodeType)=>(
                        <div key={ep.id} className={styles.epCard}>
                            <p className={styles.epOrder}>Episódio N° {ep.order} 
                            <span className={styles.epLong}>
                                {`${Math.trunc(ep.secondsLong / 60)}:${ep.secondsLong%60}`}
                            </span></p>
                            <h3 className={styles.epTitle}>{ep.name}</h3>
                            <p className={styles.epDescrip}>{ep.synopsis}</p>
                        </div>
                    ))}
                </div>
                
            </section>
        </>
    )
}