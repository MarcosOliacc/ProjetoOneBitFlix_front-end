import styles from '@/styles/homeAuth.module.scss'
import { FeaturedSection } from "@/components/homeAuth/featuredSection"
import NewestSection from "@/components/homeAuth/newestSection"
import FavoriteSection from '@/components/homeAuth/favoriteSection'
import ListCategories from '@/components/homeAuth/listCategories'
import Footer from '@/components/common/footer'

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
                <ListCategories/>
                <FavoriteSection/>
                <Footer/>
            </main>
        </>
    )
}
export default HomeAuth