import Footer from '@/components/common/footer'
import HeaderAuth from '@/components/common/headerAuth'
import SearchSection from '@/components/common/searchSection'
import styles from '@/styles/search.module.scss'


export const metadata = {
    title: 'OneBitFlix - Pesquisar',
    description: 'Uma plataforma streaming de cursos de programação'
}

export default function Search() {

    
    return(
        <>
            <main>
                <SearchSection/>
                <Footer/>
            </main>
        </>
    )
}