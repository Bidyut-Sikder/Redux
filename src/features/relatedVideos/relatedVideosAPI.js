import axiosReference from "../../utils/axios.js"







export const getRelatedVideos = async (tags, id) => {

  //  console.log(tags)
  //console.log(tags,id)
    const limit = 5;
    let queryString = tags?.length > 0 ?
        tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
        : `id_ne=${id}&_limit=${limit}`

    // using an array

    //  tags_like=javascript&tags_like=react&tags_like=css&id_ne=3&_limit=5
   //  console.log(queryString)

    const response = await axiosReference.get(`/videos?${queryString}`)
    return response.data
}


// getRelatedVideos(['javascript', 'react', 'css'], 3)


///home/bidyutsikder/Desktop/Redux/src/features/relatedVideos/relatedVideosAPI.js




























