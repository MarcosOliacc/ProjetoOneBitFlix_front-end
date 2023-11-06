'use client'

import SlideComponent from "@/components/common/slideComponent"
import categoryService from "@/services/categoryService"
import { useState } from "react"
import useSWR from "swr"
import Error from "../featuredSection/error"

interface props {
    categoryId: number
}
export default function ListCoursesByCategory({categoryId}: props) {
    const [token, setToken] = useState(()=> {
        if(typeof sessionStorage !== 'undefined') {
            const storage = sessionStorage.getItem('onebit-token')
            return storage
        } else { return null}
    })
    const { data } = useSWR(`/categories/${categoryId}`, ()=> categoryService.getCoursesBycategory(token, categoryId))
    if(!data) return(<Error/>)
    if(data) return (<><SlideComponent courses={data.data?.courses}/></>)
}
