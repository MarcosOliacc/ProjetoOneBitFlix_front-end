import styles from '@/styles/homeAuth.module.scss'
import { FeaturedSection } from "@/components/homeAuth/featuredSection"
import NewestSection from "@/components/homeAuth/newestSection"
import FavoriteSection from '@/components/homeAuth/favoriteSection'
import ListCategories from '@/components/homeAuth/listCategories'

export const metadata = {
    title: 'OneBitFlix - Home',
    description: 'Uma plataforma streaming de cursos de programação'
}

const HomeAuth = () => {
    return(
        <>
            <main className={styles.main}>
                <FeaturedSection/>
                <NewestSection/>
                <FavoriteSection/>
                <ListCategories/>
            </main>
        </>
    )
}
export default HomeAuth