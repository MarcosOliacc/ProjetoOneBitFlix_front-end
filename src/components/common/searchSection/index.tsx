'use client'
import { useSearchParams } from "next/navigation"
import styles from '@/styles/search.module.scss'
import { useState, useEffect } from 'react'
import courseService, { CourseType } from "@/services/courseService"
import SlideCard from "../slideCard"

export default function SearchSection() {
    const [token, setToken] = useState(()=> {
        if(typeof sessionStorage !== 'undefined') {
            const storage = sessionStorage.getItem('onebit-token')
            return storage
        } else { return null}
    })
    const router = useSearchParams()
    const params = router.get('name')
    const [results, setResults] = useState<CourseType[]>([])

    const searchCourses = async() => {
        if(typeof params === 'string') {
            const res = await courseService.getSearch(token,params)

            setResults(res.data.courses)
        }
    }
    useEffect(()=> {
        searchCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params])

    return(

    )
}