/* eslint-disable @next/next/no-img-element */
'use client'
import { useSearchParams, useParams, useRouter } from "next/navigation"
import styles from '@/styles/episode.module.scss'
import courseService, { CourseType } from "@/services/courseService"
import { useEffect, useState } from "react"
import Loading from "../homeAuth/featuredSection/loading"
import ReactPlayer from "react-player"

export default function EpisodePlayer() {
    const [token, setToken] = useState(()=> {
        if(typeof sessionStorage !== 'undefined') {
            const storage = sessionStorage.getItem('onebit-token')
            return storage
        } else { return null}
    })
    const router1 = useSearchParams()
    const router2 = useParams()
    const router3 = useRouter()
    const courseId = router1.get('courseId')?.toString() || ""
    const episodeOrder = Number(router2.id.toString() || "")
    const [course, setCourse] = useState<CourseType>()

    const getCourse = async () => {
        if(typeof courseId !== 'string') return;
        const res = await courseService.getCourseWithEpisodes(token, courseId)
        if(res.status === 200) {
            setCourse(res.data)
        }
    }
    useEffect(()=> {
        getCourse()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[courseId])
    function handlePrevious() {
        router3.push(`/home/course/episode/${episodeOrder - 1}?courseId=${course!.id}`)
    }
    function handleNext() {
        router3.push(`/home/course/episode/${episodeOrder + 1}?courseId=${course!.id}`)
    }

    if (!course || course.episodes === undefined) return(<Loading/>)
    return(
        <section className={styles.sect}>  
            
            <ReactPlayer 
                className={styles.player} 
                url={`${process.env.NEXT_PUBLIC_BASEURL}/episodes/stream?videoUrl=${course.episodes[episodeOrder].videoUrl}&token=${token}`} 
                controls
            />
            <p className={styles.episodeTitle}>{course.episodes[episodeOrder].name}</p>
            <div className={styles.btnContent}>
                <button className={styles.episodeBtn} disabled={episodeOrder === 0 ? true : false}
                onClick={handlePrevious}
                >
                    <img src="/episode/iconArrowLeft.svg" alt="arrowLeft" className={styles.btnImg}/>
                    <p>ANTERIOR</p>
                </button>
                <button className={styles.episodeBtn} disabled={episodeOrder + 1 ===  course.episodes.length ? true : false}
                onClick={handleNext}
                >
                    <p>PRÓXIMO</p>
                    <img src="/episode/iconArrowRight.svg" alt="arrowRight" className={styles.btnImg}/>
                </button>
            </div>

        </section>
    )
}