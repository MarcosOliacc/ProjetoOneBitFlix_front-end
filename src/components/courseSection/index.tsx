'use client'
import styles from '@/styles/course.module.scss'
import courseService, { CourseType } from "@/services/courseService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CourseSection() {
    const [token, setToken] = useState(()=> {
        if(typeof sessionStorage !== 'undefined') {
            const storage = sessionStorage.getItem('onebit-token')
            return storage
        } else { return null}
    })
    const [courses, setCourses] = useState<CourseType>()
    const {id} = useParams()
    const getCourses = async () => {
        const res = await courseService.getCourseWithEpisodes(token,id.toString())
        if(res.status == 200) {
            setCourses(res.data)
        }
    }
    useEffect(()=>{
        getCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])

    return (
        <>
            <h1>curso</h1>
        </>
    )
}