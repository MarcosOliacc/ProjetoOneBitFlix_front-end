import api from "./api";
export type EpisodeType = {
    id: number
    name: string
    synopsis: string
    order: number
    videoUrl: string
    secondsLong: number
}

export type CourseType = {
    id: number
    name: string
    thumbnailUrl: string
    synopsis: string
    episodes?: EpisodeType[]
}

const courseService = {
    getNewest: async ()=> {
        const res = await api.get('/courses/newest').catch((error)=>{
            console.log(error.response.data.message)
            return error.response
        })
        return res.data
    },
    getFeatured: async (token:string| null) => {
        const res = await api.get('/courses/featured', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((error)=>{
            console.log(error.response.data.message)
            return error.response
        })
        return res
    },
    getFavorites: async (token:string|null)=> {
        
        const res = await api.get('/favorites', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((error)=>{
            console.log(error.response.data.message)
            return error.response
        })
        return res
    },
    getSearch: async (token:string|null, name: string) => {
        const res = await api.get(`/courses/search?name=${name}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((error)=>{
            console.log(error.response.data.message)
            return error.response
        })
        return res

    }
}

export default courseService