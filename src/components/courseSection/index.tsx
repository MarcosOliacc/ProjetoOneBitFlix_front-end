/* eslint-disable @next/next/no-img-element */
'use client'
import styles from '@/styles/course.module.scss'
import courseService, { CourseType } from "@/services/courseService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from '../homeAuth/featuredSection/loading';
import Link from 'next/link';
import EpisodesSection from '../common/episodeSection';

export default function CourseSection() {
    const [token, setToken] = useState(()=> {
        if(typeof sessionStorage !== 'undefined') {
            const storage = sessionStorage.getItem('onebit-token')
            return storage
        } else { return null}
    })
    const [liked, setLiked] = useState(false)
    const [favorited, setFavorited] = useState(false)
    const [course, setCourse] = useState<CourseType>()
    const {id} = useParams()
    const getCourses = async () => {
        const res = await courseService.getCourseWithEpisodes(token,id.toString())
        if(res.status == 200) {
            setCourse(res.data)
            setLiked(res.data.liked)
            setFavorited(res.data.favorited)
            console.log(res.data)
        }
    }
    useEffect(()=>{
        getCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])

    const handleLike = async () => {
        if(liked === true) {
            await courseService.removeLike(token,id.toString())
            setLiked(false)
        } else {
            await courseService.addLike(token, id.toString())
            setLiked(true)
        }
    }
    const handleFav = async () => {
        if(favorited === true) {
            await courseService.removeFavorite(token,id.toString())
            setFavorited(false)
        } else {
            await courseService.addFavorite(token, id.toString())
            setFavorited(true)
        }
    }

    if(!course) return(<Loading/>)
    return (
        <>
            <main>
                <div className={styles.conteiner} style={{
                    backgroundImage:`li(#151515, #6666661a, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl})`,
                    backgroundSize:'cover',
                    backgroundPosition: 'center'
                }}>
                <section className={styles.sect}>
                    <h1 className={styles.title}>{course.name}</h1>
                    <p className={styles.descrip}>{course.synopsis}</p>
                </section>
                </div>
                <div className={styles.btnContent}>
                    <Link href={`/home/course/episode/0?courseId=${course.id}`} className={styles.link}>
                        <button className={styles.playBtn} disabled={course.episodes?.length === 0 ? true : false}>ASSISTIR AGORA
                            <img src="/buttonPlay.svg" alt="ButtonPlay" className={styles.btnImg}/>
                        </button>
                    </Link>
                </div>
                <div className={styles.btnContent}>
                    <img src={liked === true ? `/course/iconLiked.svg`:`/course/iconLike.svg`} alt="likeImg"  className={styles.interImg}
                    onClick={handleLike}
                    />
                    <img src={favorited === false? `/course/iconAddFav.svg`:`/course/iconFavorited.svg`} alt="favImg"  className={styles.interImg}
                    onClick={handleFav}
                    />
                </div>
                {course.episodes ? <EpisodesSection episodes={course.episodes} courseId={course.id}/>: <></>}
                
            </main>
        </>
    )
}