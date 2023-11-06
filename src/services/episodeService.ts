import api from "./api";

interface WatchTimeParams {
    episodeId: number
    seconds: number
}
export const episodeService = {
    getWatchTime: async (token: string|null, id: number) => {
        const res = await api.get(`/episodes/${id}/watchTime`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((error)=>{
            console.log(error.response.data.message)
            return error.response
        })
        return res
    },
    setWatchTime: async (token: string|null, {episodeId, seconds}: WatchTimeParams) => {
        const res = await api.post(`/episodes/${episodeId}/watchTime`,{seconds}, {
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