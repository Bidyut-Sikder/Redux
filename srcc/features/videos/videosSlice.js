import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideos } from "./videosAPI"



const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchVideosAsync = createAsyncThunk('videos/fetchVideos', async ({tags,search}) => {

    const videos = await getVideos(tags,search)

    return videos
})


const videosSlice = createSlice({
    name: 'videos',
    initialState,
    extraReducers: (builder) => {

        builder
            .addCase(fetchVideosAsync.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(fetchVideosAsync.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.videos = action.payload
            })
            .addCase(fetchVideosAsync.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error.message
            })

    }
})



export default videosSlice.reducer;
















