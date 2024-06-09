
import axiosReference from "../../utils/axios"



export const getTags = async () => {
    const response = await axiosReference.get('/tags')
    return response.data
}
