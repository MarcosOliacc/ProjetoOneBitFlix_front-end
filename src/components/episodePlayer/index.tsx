/* eslint-disable @next/next/no-img-element */
'use client'
import { useSearchParams, useParams, useRouter } from "next/navigation"
import styles from '@/styles/episode.module.scss'
import courseService, { CourseType } from "@/services/courseService"
import { useEffect, useState, useRef } from "react"
import Loading from "../homeAuth/featuredSection/loading"
import ReactPlayer from "react-player"
import Link from "next/link"
import { episodeService } from "@/services/episodeService"

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
    const [getEpisodeTime, setGetEpisodeTime] = useState(0)
    const [episodeTime, setEpisodeTime] = useState(0)
    const [isReady, setIsReady] = useState(false)

    const playRef = useRef<ReactPlayer>(null)

    const handleTime = () => {
        playRef.current?.seekTo(getEpisodeTime)
        setIsReady(true)
    }
    if(isReady === true) {
        setTimeout(()=> { handleSetEpisodeTime()}, 3000 )
    }
    const handleSetEpisodeTime = async () => {
        if(!course || course.episodes === undefined) console.log('nada')
        else {
            const res = await episodeService.setWatchTime(token,{episodeId: course.episodes[episodeOrder].id, seconds: Math.round(episodeTime)})
        }
        
    }
    
    const getCourse = async () => {
        if(typeof courseId !== 'string') return;
        const res = await courseService.getCourseWithEpisodes(token, courseId)
        if(res.status === 200) {
            setCourse(res.data)
            const res2 = await episodeService.getWatchTime(token, res.data.episodes[episodeOrder].id)
            if(res2.status === 200) {
                if(res2.data !== null){
                    setGetEpisodeTime(res2.data.seconds)
                }
            }
        }
    }
    useEffect(()=> {
        getCourse()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[courseId])
    if (!course || course.episodes === undefined) return(<Loading/>)


    function handlePrevious() {
        router3.push(`/home/course/episode/${episodeOrder - 1}?courseId=${course!.id}`)
    }
    function handleNext() {
        router3.push(`/home/course/episode/${episodeOrder + 1}?courseId=${course!.id}`)
    }
    

    
    return(
        <section className={styles.sect}>
            <ReactPlayer 
                className={styles.player} 
                url={`${process.env.NEXT_PUBLIC_BASEURL}/episodes/stream?videoUrl=${course.episodes[episodeOrder].videoUrl}&token=${token}`} 
                controls
                width='1100'
                height=''
                ref={playRef}
                onStart={handleTime}
                onProgress={(progress)=>{setEpisodeTime(progress.playedSeconds)}}
            />
            <div className={styles.episodeInfos}>
                <p className={styles.episodeTitle}>{course.episodes[episodeOrder].name}</p>
                <div className={styles.courseInfos}>
                    <Link href={`/home/course/${course.id}`} className={styles.link}><p>{course.name}</p></Link>
                    <img src="/episode/iconArrowRight.svg" alt="arrowRight" className={styles.btnImg}/>
                    <Link href={`/home/course/episode/0?courseId=${course!.id}`} className={styles.link}><p>INICIO</p></Link>
                </div>
                
                <p className={styles.epDescrip}>{course.episodes[episodeOrder].synopsis}</p>
            </div>
            
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