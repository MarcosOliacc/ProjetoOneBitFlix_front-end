/* eslint-disable @next/next/no-img-element */
'use client'
import styles from './styles.module.scss'
import useSWR from 'swr'
import courseService, { CourseType } from '@/services/courseService'
import HeaderAuth from "@/components/common/headerAuth"
import { useState } from 'react'
import Link from 'next/link'
import Error from './error'
import Loading from './loading'


export const FeaturedSection = () => {
    const [token, setToken] = useState(()=> {
        if(typeof sessionStorage !== 'undefined') {
            const storage = sessionStorage.getItem('onebit-token')
            return storage
        } else { return ''}
    })
    
    const { data, error } = useSWR('/featured', ()=>courseService.getFeatured(token))
    if(!data) return (<><Loading/></>)
    if(data.status == 401) return (<><Error/></>)
    if(data) return (
        <>
            {data.data?.map((course:CourseType)=>(
                <div style={{
                        backgroundImage: `linear-gradient(#151515, #6666661a, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '480px',
                        
                    }} key={course.id} className={styles.div2Father}>
                    
                    <section className={styles.sect}>
                        <h2 className={styles.title}>{course.name}</h2>
                        <p className={styles.description}>{course.synopsis}</p>
                        <Link href={`/home/course/${course.id}`} className={styles.link}>
                            <button className={styles.button}>
                                ACESSE AGORA
                                <img src="/buttonPlay.svg" alt="playButton" className={styles.btnImg}/>
                            </button></Link>
                    </section>
                    
                </div>
                
            ))[0]}
        </>
    )
}
