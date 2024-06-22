import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/api';
import massageReducer from '../features/massages/massageSlice';
import authReducer from '../features/auth/authSlice';
import conversationReducer from '../features/conversations/conversationSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    massages: massageReducer,
    auth: authReducer,
    conversation: conversationReducer

  },
  devTools: process.env.NODE_ENV !== 'production',

  middleware: (defaultMiddleware) => defaultMiddleware().concat(apiSlice.middleware)
});

