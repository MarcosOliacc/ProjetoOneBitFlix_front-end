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
                

                    ))}
                </div>
                
            </section>
        </>
    )
}