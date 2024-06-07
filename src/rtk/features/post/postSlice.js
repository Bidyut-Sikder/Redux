import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"



const init = {
    loading: false,
    posts: [],
    err: ''
}


export const fetchPosts = createAsyncThunk('fetchPosts', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')

    const response = await res.json()
    //console.log(res)

    return response
})


const postSlice = createSlice({
    name: 'posts',
    initialState: init,

    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true
            state.err = ''


        })

        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.err = ''
        })

        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.err = action.error.message
        })
    }
})




export default postSlice.reducer





















