



import axiosReference from "../../utils/axios"



export const getVideo = async (id) => {
   // console.log(id)
    const response = await axiosReference.get(`/videos/${id}`)
    return response.data
}









