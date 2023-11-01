import api from "./api";
import { CourseType } from "./courseService";

export type CategoryType = {
    id: number
    name: string
    position: number
    courses?: CourseType[]
}
const categoryService = {
    getCategories: async (token: string|null) => {
        const res = await api.get('/categories', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((error)=>{
            console.log(error.response.data.message)
            return error.response
        })
        return res

    },
    getCoursesBycategory: async (token: string|null,id:number) => {
        const res = await api.get(`/categories/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((error)=>{
            console.log(error.response.data.message)
            return error.response
        })
        return res

    },

}

export default categoryService