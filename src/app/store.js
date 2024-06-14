import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../feature/transaction/transactionSlice";

export const store = configureStore({
    reducer: {
        transaction:transactionReducer
    },
});
