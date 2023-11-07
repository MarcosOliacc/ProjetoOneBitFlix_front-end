import SlideComponent from "@/components/common/slideComponent"
import courseService from "@/services/courseService"
import useSWR from "swr"
import styles from '@/styles/homeAuth.module.scss'
const NewestSection = async () => {
    const courses = await courseService.getNewest()

    return (
        <>  
            <section className={styles.sectSlide}>
                <div className={styles.titleContent}><p className={styles.sectTitle}>LANÇAMENTOS</p></div>
                
                <SlideComponent courses={courses}/>
            </section>
        </>
    )
}

export default NewestSection