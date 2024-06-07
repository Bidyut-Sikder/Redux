import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice.js";
import dynamicCounterSlice from "./features/dynamicCounter/dynamicCounterSlice.js";
// import { createLogger } from "redux-logger";

import pkg from 'redux-logger';
import postSlice from "./features/post/postSlice.js";
const { createLogger } = pkg;

  //console.log(postSlice)

const logger = createLogger()


const store = configureStore({
    reducer: {
        counter: counterSlice,
        dynamicCounter: dynamicCounterSlice,
        //  post: postSlice

    },
    middleware: (defaultMiddlewares) => defaultMiddlewares().concat(logger)


})






export default store



















