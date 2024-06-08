import { configureStore } from "@reduxjs/toolkit";
import singleSlice from "./singleVideoSlice.js";
import pkg from 'redux-logger';
import videosSlice from "./getVideosSlice.js";
const { createLogger } = pkg;

const logger = createLogger()
const store = configureStore({
    reducer: {
        oneVideo: singleSlice,
        manyVideos: videosSlice
    },
    middleware: (defaultMiddlewares) => defaultMiddlewares().concat(logger)
})




export default store














