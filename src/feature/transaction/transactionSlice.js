import { asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addData, deleteData, getData, updateData } from "./transactionsAPI";

const init = {
    transactions: [],
    isLoading: false,
    isError: false,
    error: '',
    editing: {}
}

//thunk functions are writen here.
export const getAsyncData = createAsyncThunk('transaction/getData', async () => {

    const res = await getData()
    return res

})

export const addAsyncData = createAsyncThunk('transaction/addData', async (data) => {

    const res = await addData(data)
    return res

})

export const updateAsyncData = createAsyncThunk('transaction/updateData', async ({ id, data }) => {

    const res = await updateData(id, data)
    return res

})

export const deleteAsyncData = createAsyncThunk('transaction/deleteData', async (id) => {

    const res = await deleteData(id)
    return res

}
)










const transactionSlice = createSlice({
    name: 'transactions',
    initialState: init,

    reducers: {
        editActive: (state, action) => {
            // console.log(action)
            state.editing = action.payload

        },
        editInactive: (state, action) => {
            state.editing = {}
        },

    },

    extraReducers: (builder) => {
        builder
            //fetching data
            .addCase(getAsyncData.pending, (state) => {

                state.isLoading = true
                state.error = ''
            })
            .addCase(getAsyncData.fulfilled, (state, action) => {

                state.isLoading = false
                state.transactions = action.payload
                state.error = ''
            })
            .addCase(getAsyncData.rejected, (state, action) => {

                state.isLoading = false
                state.transactions = []
                state.error = action.error?.message
            })

            //adding data
            .addCase(addAsyncData.pending, (state) => {

                state.isLoading = true
                state.error = ''
            })
            .addCase(addAsyncData.fulfilled, (state, action) => {

                state.isLoading = false
                state.transactions.push(action.payload)
                state.error = ''
            })
            .addCase(addAsyncData.rejected, (state, action) => {

                state.isLoading = false
                state.isError = true
                state.error = action.error?.message
            })

            // updating data
            .addCase(updateAsyncData.pending, (state) => {

                state.isLoading = true
                state.error = ''
            })
            .addCase(updateAsyncData.fulfilled, (state, action) => {

                state.isLoading = false
                let indexById = state.transactions.findIndex(item => item.id === action.payload.id)

                state.transactions[indexById] = action.payload
                state.error = ''
            })
            .addCase(updateAsyncData.rejected, (state, action) => {

                state.isLoading = false

                state.error = action.error?.message
            })
            //delating data
            .addCase(deleteAsyncData.pending, (state) => {

                state.isLoading = true
                state.error = ''
            })
            .addCase(deleteAsyncData.fulfilled, (state, action) => {


                state.isLoading = false
                let filteredTransactions = state.transactions.filter(item => item.id !== action.meta.arg)
                state.transactions = filteredTransactions
                state.error = ''
            })
            .addCase(deleteAsyncData.rejected, (state, action) => {

                state.isLoading = false

                state.error = action.error?.message
            })



    }

})


export const { editActive, editInactive } = transactionSlice.actions;


export default transactionSlice.reducer;































