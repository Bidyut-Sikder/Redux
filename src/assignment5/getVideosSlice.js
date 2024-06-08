









import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSingleVideo } from "./singleVideoSlice.js";



const init = {
    loading: false,
    data: [],
    err: ''
}


export const getVideos = createAsyncThunk('videos', async (arg1, arg2) => {


   // const res = await fetch(`http://localhost:9000/videos?tags_like=javascript&tags_like=react`)
     const res = await fetch(`http://localhost:9000/videos?tags_like=${arg1}&tags_like=${arg2}`)
    const response = await res.json()

    //console.log(res)
    return response

})


// export const getVideos = createAsyncThunk('videos', async () => {


//     const res = await fetch(`http://localhost:9000/videos?tags_like=javascript&tags_like=react`)
//     const response = await res.json()

//     console.log(res)
//     return response

// })


const videosSlice = createSlice({
    name: 'Videos',

    initialState: init,

    extraReducers: (builder) => {



        // builder.addCase(getSingleVideo.fulfilled, (state, action) => {

        //     // console.log(action.payload.tags[1])
        //      getVideos(action.payload.tags[0],action.payload.tags[1])

        //     // state.loading = false
        //     // state.data = action.payload


        //     // state.err = ''
        // })









        builder.addCase(getVideos.pending, (state, action) => {
            state.loading = true

            state.err = ''
        })

        builder.addCase(getVideos.fulfilled, (state, action) => {

            // console.log(action.payload.tags)

            state.loading = false
            state.data = action.payload


            state.err = ''
        })

        builder.addCase(getVideos.rejected, (state, action) => {
            state.loading = false
            state.data = []


            state.err = action.error.message
        })
    }


})



export default videosSlice.reducer




















