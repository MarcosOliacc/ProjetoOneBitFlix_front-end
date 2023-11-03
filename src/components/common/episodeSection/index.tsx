import { EpisodeType } from '@/services/courseService'
import styles from '@/styles/course.module.scss'

interface props {
    episodes: EpisodeType
}

export default function EpisodesSection({episodes}:props) {
    return(
        <>
            <section className={styles.sect}>
                <p>LISTA DE EPISÓDIOS</p>
                <div className={styles.epCard}>
                    
                </div>
                
            </section>
        </>
    )
}