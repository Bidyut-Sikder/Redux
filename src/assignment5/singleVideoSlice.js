import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getVideos } from "./getVideosSlice.js";
// import store from "./store.js";



const init = {
    loading: false,
    data: {},
    err: ''
}

export const getSingleVideo = createAsyncThunk('singlePost', async () => {


    const res = await fetch('http://localhost:9000/videos')
    const response = await res.json()

    return response

})



const singleSlice = createSlice({
    name: 'singleVideo',

    initialState: init,

    extraReducers: (builder) => {
        builder.addCase(getSingleVideo.pending, (state, action) => {
            state.loading = true

            state.err = ''
        })

        builder.addCase(getSingleVideo.fulfilled, (state, action) => {

            //  console.log(action.payload.tags)
            const tagArray = action.payload.tags.map((item) => item);
            //console.log(tagArray)
            
        
            state.loading = false
            state.data = action.payload
            state.err = ''
        
            // store.dispatch(getVideos(tagArray[0], tagArray[1]))

        })

        //getVideos 

        // builder.addCase(getVideos.fulfilled, (state, action) => {

            

        //     state.loading = false
        //     state.data = action.payload

        //     state.err = ''
        // })









        builder.addCase(getSingleVideo.rejected, (state, action) => {
            state.loading = false
            state.data = {}


            state.err = action.error.message
        })
    }


})



export default singleSlice.reducer











































