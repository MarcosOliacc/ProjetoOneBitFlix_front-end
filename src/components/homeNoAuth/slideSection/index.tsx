"use-client"
import courseService, { CourseType } from '@/services/courseService'
import styles from './styles.module.scss'
import SlideComponent from '@/components/common/slideComponent'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { ReactNode} from 'react'

interface IndexPageProps {
    children?: ReactNode
    courses: CourseType[]
  }

const SlideSect = ({courses}: IndexPageProps)=> {
    return (
        <>
            <section className={styles.sect}>
                <p className={styles.sectionTitle}>AULAS JÁ DISPONÍVEIS</p>
                <SlideComponent courses={courses}/>
                <Link href='/register'>
                    <button className={styles.slideBtn}>Se cadaster para acessar</button>
                </Link>
                
            </section>
        </>
    )
}
export const getStaticProps: GetStaticProps = async ()=> {
    const res = await courseService.getNewest()
    return {
      props: {
        courses: res.data
      },
      revalidate: 3600 * 24,
      
    }
  }
export default SlideSect