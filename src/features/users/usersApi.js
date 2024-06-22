

import { apiSlice } from "../api/api";


const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (email) => {
                return `/users?email=${email}`;
            }

        })



    })
})





export const { useGetUserQuery  } = usersApi
























