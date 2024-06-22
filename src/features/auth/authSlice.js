

import { createSlice } from "@reduxjs/toolkit";


const init = {
    accessToken: undefined,
    user: undefined
}



const authSlice = createSlice({
    name: "auth",
    initialState: init,
    reducers: {
        userLogIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user
        },
        userLogOut: (state) => {
            state.accessToken = undefined;
            state.user = undefined
        },
    }
})




export const { userLogIn, userLogOut } = authSlice.actions


export default authSlice.reducer




































