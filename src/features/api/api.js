import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLogOut } from "../auth/authSlice";




const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:9000',
    prepareHeaders: (headers, { getState, endpoint }) => {

        const token = getState()?.auth?.accessToken

        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
        }


        return headers
    }
})



export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: async (args, api, extraOptions) => {

        const result = await baseQuery(args, api, extraOptions)

       
        if (result?.error?.status === 401) {
            api.dispatch(userLogOut())
            localStorage.clear()
        }

        return result
    }
    ,
    tagTypes: [],
    endpoints: (builder) => ({})

})











