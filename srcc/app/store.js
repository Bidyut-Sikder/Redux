import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/videos/videosSlice.js';
import tagsReducer from '../features/tags/tagSlice.js';
import videoReducer from '../features/video/videoSlice.js';
import relatedVideosReducer from '../features/relatedVideos/relatedVideosSlice.js';
import filterReducer from '../features/filter/filterSlice.js';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
    video: videoReducer,
    realatedVideos: relatedVideosReducer,
    filter: filterReducer
  },
});
