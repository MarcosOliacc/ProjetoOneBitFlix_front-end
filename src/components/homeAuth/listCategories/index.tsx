'use client'

import categoryService, { CategoryType } from "@/services/categoryService"
import { useState } from "react"
import useSWR from "swr"
import styles from '@/styles/homeAuth.module.scss'

export default function ListCategories() {
    const [token, setToken] = useState(()=> {
        if(typeof sessionStorage !== 'undefined') {
            const storage = sessionStorage.getItem('onebit-token')
            return storage
        } else { return null}
    })
    const { data } = useSWR('/categories', ()=> categoryService.getCategories(token))
    if(!data) return (<></>)
    console.log(data)
    if (data) return(
        <>
            {data.data?.categories.map((categ:CategoryType)=> (
                <div key={categ.id}>
                    <p>{categ.name}</p>
                </div>
            ))}
        </>
    )
}