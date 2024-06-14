import axiosReference from "../../utils/axios"


//tags_like=javascript&tags_like=react&tags_like=css&id_ne=3&_limit=5
export const getVideos = async (tags, search) => {


    let queryString = ''

    if (tags?.length > 0) {
        queryString = tags.map(tag => `tags_like=${tag}`).join('&')
    }
    if (search.length > 0) {
        // console.log('df')
        queryString += `&q=${search}`
    }

   // console.log(queryString)

    const response = await axiosReference.get(`/videos?${queryString}`)
    return response.data
}








