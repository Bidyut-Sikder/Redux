import { createSlice } from "@reduxjs/toolkit";
import { dynamicCounterActions } from "../dynamicCounter/dynamicCounterSlice.js";



const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },

    reducers: {
        increment: (state, action) => {
            state.count += 1

        },
        decrement: (state, action) => {
            state.count -= 1

        },
        reset: (state, action) => {
            state.count = 0

        },


    },
    extraReducers: (builder) => {
        builder.addCase(dynamicCounterActions.increment, (state, action) => {
            state.count = action.payload
        })
    }


})


export const counterActions = counterSlice.actions



export default counterSlice.reducer


























