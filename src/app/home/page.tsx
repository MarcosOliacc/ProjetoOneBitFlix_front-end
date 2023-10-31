
import { FeaturedSection } from "@/components/homeAuth/featuredSection"
import NewestSection from "@/components/homeAuth/newestSection"

export const metadata = {
    title: 'OneBitFlix - Home',
    description: 'Uma plataforma streaming de cursos de programação'
}

const HomeAuth = () => {
    return(
        <>
            <main>
                <FeaturedSection/>
                <NewestSection/>
            </main>
        </>
    )
}
export default HomeAuth