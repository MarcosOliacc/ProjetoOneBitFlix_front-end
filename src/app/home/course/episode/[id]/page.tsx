import Footer from '@/components/common/footer'
import EpisodePlayer from '@/components/episodePlayer'
import styles from '@/styles/episode.module.scss'
export default function EpisodePage() {
    return(
        <main className={styles.main}>
            <EpisodePlayer/>
            <Footer/>
        </main>
    )
}