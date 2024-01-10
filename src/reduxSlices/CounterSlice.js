import { createSlice } from "@reduxjs/toolkit";



const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
        input1: 0,
        input2: 0
    },
    reducers: {
        increment: (state, action) => {
            console.log(action)
            return {
                ...state,
                count: state.count + action.payload.count,
                input1: action.payload.input1,
                input2: action.payload.input2,
            }
        },
        decrement: (state, action) => {
            return { ...state, count: state.count - 1 }
        },
        reset: (state, action) => {
            return { ...state, count: 0 }
        },
    }
})



export const { increment, decrement, reset } = CounterSlice.actions






export default CounterSlice.reducer
















