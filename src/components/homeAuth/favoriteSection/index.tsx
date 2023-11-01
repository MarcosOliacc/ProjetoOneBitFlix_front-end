'use client'
import styles from '@/styles/homeAuth.module.scss'
import courseService from "@/services/courseService"
import useSWR from "swr"
import Error from "../featuredSection/error"
import { useState } from "react"
import SlideComponent from "@/components/common/slideComponent"

const FavoriteSection = () => {
    const [token, setToken] = useState(()=> {
        if(typeof sessionStorage !== 'undefined') {
            const storage = sessionStorage.getItem('onebit-token')
            return storage
        } else { return ''}
    })
    const {data, error} = useSWR('/favorites', ()=> courseService.getFavorites(token))
    if(!data) return (
        <>
            <section className={styles.sectSlide}>
                <div className={styles.titleContent}><p className={styles.sectTitle}>FAVORITOS</p></div>
                
                
            </section>
        </>
    )
    console.log(data)
    if(data.status == 401) return (<><Error/></>)

    if(data.data.courses.length >= 6) return(
        <>
            <section className={styles.sectSlide}>
            <div className={styles.titleContent}><p className={styles.sectTitle}>FAVORITOS</p></div>
                
                <SlideComponent courses={data.data?.courses}/>
            </section>
        </>
    )
}
export default FavoriteSection