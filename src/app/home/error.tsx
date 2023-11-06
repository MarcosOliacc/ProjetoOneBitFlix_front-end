'use client'

import { useRouter } from "next/navigation"

export default function Error() {
    const router = useRouter()
    setTimeout(()=> {
        router.push('/')
    }, 3000)
    return(
        <>
            <p>ocorreu um erro</p>
        </>
    )
} 