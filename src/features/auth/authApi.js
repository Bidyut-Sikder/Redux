import { apiSlice } from "../api/api";
import { userLogIn } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // register: builder.mutation({
        //     query: (data) => ({
        //         url: '/register',
        //         method: 'POST',
        //         body: data
        //     }),
        //     async onQueryStarted(arg, { dispatch, queryFulfilled }) {

        //         const { data } = await queryFulfilled;
        //         try {

                   
        //             localStorage.setItem('auth', JSON.stringify({
        //                 accessToken: data.accessToken,
        //                 user: data.user
        //             }))
        //             dispatch(userLogIn({
        //                 accessToken: data.accessToken,
        //                 user: data.user
        //             }))
        //         } catch (error) {
        //             //we don't need to do anything...
        //         }  

        //     }
        // }),

        register: builder.mutation({
            query: (data) => ({
                url: '/register',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {

                const { data } = await queryFulfilled;
                try {
                    localStorage.setItem('auth', JSON.stringify({
                        accessToken: data.accessToken,
                        user: data.user
                    }))
                    dispatch(userLogIn({
                        accessToken: data.accessToken,
                        user: data.user
                    }))
                } catch (error) {
                    //we don't need to do anything...
                }

            }
        }),






        login: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {

                const { data } = await queryFulfilled;
                try {
                    localStorage.setItem('auth', JSON.stringify({
                        accessToken: data.accessToken,
                        user: data.user
                    }))
                    dispatch(userLogIn({
                        accessToken: data.accessToken,
                        user: data.user
                    }))
                } catch (error) {
                    //we don't need to do anything...
                }

            }
        })
    })
})


export const { useLoginMutation, useRegisterMutation } = authApi






