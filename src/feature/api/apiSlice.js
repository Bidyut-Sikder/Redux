import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: '  http://localhost:9000'
    }),
    tagTypes: ['videos', 'video', 'relatedVideos'],

    endpoints: (builder) => ({
        getVideos: builder.query({
            query: () => '/videos',
            providesTags: (result, error, arg) => (['videos'])

            //  keepUnusedDataFor: 5//it keeps fetched data for 25 seconds after 25 secodes it will refetch data
        }),
        getVideo: builder.query({
            query: (id) => `/videos/${id}`,
            providesTags: (result, error, arg) => ([{ type: 'video', id: arg }, { type: 'relatedVideos', id: arg }])

        }),
        getRelatedVideos: builder.query({
            query: ({ id, title }) => {
                let titleArr = title.split(' ')
                const withoutOperators = titleArr.filter(item => !["-", "+"].includes(item));
                let strings = withoutOperators.map((item, i) => `title_like=${item}`)

                const queryString = `/videos?${strings.join('&')}&id_ne=${id}&_limit=4`
                return queryString
            },



        }),
        addVideo: builder.mutation({
            query: (data) => ({
                url: '/videos',
                method: 'POST',
                body: data
            }),

            invalidatesTags: ['videos']
        }),

        updateVideo: builder.mutation({
            query: ({ id, data }) => ({
                url: `/videos/${id}`,
                method: 'PATCH',
                body: data
            }),


            invalidatesTags: (result, error, arg) => (['videos', { type: 'video', id: arg.id }, { type: 'relatedVideos', id: arg.id }])
        }),
        deleteVideo: builder.mutation({
            query: (id) => ({
                url: `/videos/${id}`,
                method: 'DELETE'

            }),
            invalidatesTags: (result, error, arg) => (['videos'])
        })

    })
})

export const { useGetVideosQuery, useDeleteVideoMutation,useUpdateVideoMutation, useGetVideoQuery, useGetRelatedVideosQuery, useAddVideoMutation } = apiSlice








// let dd = 'SASS Tutorial - in English - Overview of SASS'
// let ss = dd.split(' ')
// const withoutOperators = ss.filter(item => !["-", "+"].includes(item));
// console.log(withoutOperators)

// let strings = withoutOperators.map((item, i) => `title_like=${item}`)

// const queryString = `?${strings.join('&')}&_limit=4`

// console.log(queryString)




























