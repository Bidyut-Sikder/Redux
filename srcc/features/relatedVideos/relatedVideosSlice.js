




import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getRelatedVideos } from "./relatedVideosAPI";


const initialState = {
    relatedVideos: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchRelatedVideosAsync = createAsyncThunk('relatedVideos/fetchRelatedVideos', async ({tags,id}) => {

// console.log(tags,id)

    const videos = await getRelatedVideos(tags,id)

    return videos;
})


const relatedVideosSlice = createSlice({
    name: 'relatedVideos',
    initialState,
    extraReducers: (builder) => {

        builder
            .addCase(fetchRelatedVideosAsync.pending,  (state) => {
                state.isLoading = true
                state.isError = false
            })

            .addCase(fetchRelatedVideosAsync.fulfilled,  (state, action) => {
                state.isLoading = false
                state.isError = false
                state.relatedVideos = action.payload
            })
            .addCase(fetchRelatedVideosAsync.rejected,  (state, action) => {
                state.isLoading = false
                state.isError = true
             
                state.error = action.error.message

            })




    }
})


export default relatedVideosSlice.reducer













































