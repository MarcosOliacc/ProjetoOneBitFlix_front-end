'use client'
import styles from './styles.module.scss'
import useSWR from 'swr'
import courseService, { CourseType } from '@/services/courseService'


export const FeaturedSection = () => {
    const token = sessionStorage.getItem('onebit-token')
    if(!token) throw new Error()
    const {data,error} = useSWR('/featured', ()=>courseService.getFeatured(token))
    if(!data) return(<p>Loading...</p>)
    return (
        <>
            {data.data?.map((course:CourseType)=>(
                <p key={course.id}>{course.name}</p>
            ))}
        </>
    )
}
