import SlideComponent from "@/components/common/slideComponent"
import courseService from "@/services/courseService"
import useSWR from "swr"
import styles from '@/styles/homeAuth.module.scss'
const NewestSection = async () => {
    const courses = await courseService.getNewest()

    return (
        <>  
            <section className={styles.sect}>
                <p>LANÇAMENTOS</p>
                <SlideComponent courses={courses}/>
            </section>
        </>
    )
}

export default NewestSection