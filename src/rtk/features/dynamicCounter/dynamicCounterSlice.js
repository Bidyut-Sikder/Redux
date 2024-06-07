import { createSlice } from "@reduxjs/toolkit";
import { counterActions } from "../counter/counterSlice.js";



const dynamicCounterSlice = createSlice({

    name: 'dynamicCounter',
    initialState: { dynamicCount: 0 },
    // initialState: { count: 0 },

    reducers: {
        increment: (state, action) => {
            state.dynamicCount += action.payload

        },
        decrement: (state, action) => {
            state.dynamicCount -= action.payload

        },
        reset: (state, action) => {
            state.dynamicCount = 0

        },

    },
    extraReducers: (builder) => {
        builder.addCase(counterActions.increment, (state, action) => {
            state.dynamicCount = action.payload
        })
    }


})


export const dynamicCounterActions = dynamicCounterSlice.actions



export default dynamicCounterSlice.reducer



