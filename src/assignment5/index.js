import { getVideos } from "./getVideosSlice.js";
import { getSingleVideo } from "./singleVideoSlice.js";
import store from "./store.js";








// store.subscribe(() => {
//     console.log(store.getState())

// })


const check = async () => {
    const singleVideoData = await store.dispatch(getSingleVideo())

    store.dispatch(getVideos(singleVideoData.payload.tags[0], singleVideoData.payload.tags[1]))
}
check()


//store.dispatch(getVideos())


//store.dispatch(getVideos('javascript', 'react'))


// const d = store.getState()
// console.log(d)




