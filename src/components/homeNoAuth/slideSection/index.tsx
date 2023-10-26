import { CourseType } from '@/services/courseService'
import styles from './styles.module.scss'
import SlideComponent from '@/components/common/slideComponent'
import Link from 'next/link'

interface props {
    newestCourses: CourseType[]
}
const SlideSect = async ({newestCourses}: props)=> {
    return (
        <div>
            <section className={styles.sect}>
                <p className={styles.sectionTitle}>AULAS JÁ DISPONÍVEIS</p>
                <SlideComponent courses={newestCourses}/>
                <Link href='/register'>
                    <button className={styles.slideBtn}>Cadastre-se para acessar</button>
                </Link>
            </section>
        </div>
    )
}

export default SlideSect