'use client'

import categoryService, { CategoryType } from "@/services/categoryService"
import { useState } from "react"
import useSWR from "swr"
import styles from '@/styles/homeAuth.module.scss'
import ListCoursesByCategory from "../listCoursesByCategory"

export default function ListCategories() {
    const [token, setToken] = useState(()=> {
        if(typeof sessionStorage !== 'undefined') {
            const storage = sessionStorage.getItem('onebit-token')
            return storage
        } else { return null}
    })
    const { data } = useSWR('/categories', ()=> categoryService.getCategories(token))
    if(!data) return (<></>)
    if (data) return(
        <>
            {data.data?.categories.map((categ:CategoryType)=> (
                <section key={categ.id} className={styles.sectSlide}>
                    <div className={styles.titleContent}><p className={styles.sectTitle}>{categ.name}</p></div>
                    <ListCoursesByCategory categoryId={categ.id}/>
                </section>
            ))}
        </>
    )
}