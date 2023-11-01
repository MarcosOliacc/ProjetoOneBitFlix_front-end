import api from "./api";

interface UserParams {
    firstName: string
    lastName: string
    phone: string
    email: string
    createdAt: string
}

export const ProfileService = {
    fetchCurrent: async (token: string|null) => {
        const res = await api.get('/account', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((error)=>{
            console.log(error.response.data.message)
            return error.response
        })
        return res.data
    },
    userUpdate: async (token: string| null, params: UserParams) => {
        const res = await api.put('/account', params, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).catch((error)=>{
            if(error.response.status === 400 || error.response.status === 401)
            console.log(error.response.data.message)
            return error.response
        })
        return res.status
    },

}