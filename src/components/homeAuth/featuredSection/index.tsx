/* eslint-disable @next/next/no-img-element */
'use client'
import styles from './styles.module.scss'
import useSWR from 'swr'
import courseService, { CourseType } from '@/services/courseService'
import HeaderAuth from "@/components/common/headerAuth"
import { useState } from 'react'
import Link from 'next/link'


export const FeaturedSection = () => {
    const [token, setToken] = useState(()=> {
        const storage = sessionStorage.getItem('onebit-token')
        return storage
    })
    
    const {data,error} = useSWR('/featured', ()=>courseService.getFeatured(token))
    if(error) return(
        <>
            <h2>algo deu errado</h2>
        </>
    )
    if(!data) return(<p>Loading...</p>)
    return (
        <>
            {data.data?.map((course:CourseType)=>(
                <div style={{
                        backgroundImage: `linear-gradient(to bottom, #6666661a, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '480px',
                        
                    }} key={course.id} className={styles.divFather}>
                    <HeaderAuth/>
                    <section className={styles.sect}>
                        <h2 className={styles.title}>{course.name}</h2>
                        <p className={styles.description}>{course.synopsis}</p>
                        <Link href='' className={styles.link}>
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
