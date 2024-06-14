import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { getTags } from "./tagAPI"



const initialState = {
    tags: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchTagAsync = createAsyncThunk('tags/fetchTags', async () => {

    const tags = await getTags()

    return tags
})


const tagSlice = createSlice({
    name: 'tags',
    initialState,
    extraReducers: (builder) => {

        builder
            .addCase(fetchTagAsync.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(fetchTagAsync.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.tags = action.payload
            })
            .addCase(fetchTagAsync.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error?.message
                state.tags = []
            })

    }
})



export default tagSlice.reducer;

