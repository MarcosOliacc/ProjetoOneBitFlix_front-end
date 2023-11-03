import Footer from '@/components/common/footer'
import SearchSection from '@/components/common/searchSection'


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