import { io } from "socket.io-client";
import { apiSlice } from "../api/api"




export const messageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: (id) => {
        return `/messages?conversationId=${id}&_sort=timestamp&_order=desc&_page=1&_limit=${import.meta.env.VITE_MESSAGES_PERPAGE}`
      },
      async onCacheEntryAdded(arg, { updateCachedData,
        cacheDataLoaded, cacheEntryRemoved }) {

        const socket = io("http://localhost:9000", {
          reconnectionDelay: 1000,
          reconnection: true,
          reconnectionAttempts: 10,
          transports: ["websocket"],
          agent: false,
          upgrade: false,
          rejectUnauthorized: false,

        })
        try {
          await cacheDataLoaded;
          socket.on("message", (data) => {

            updateCachedData((draft) => {
    
              const message = draft.find((message) =>
                message.conversationId == data?.message?.conversationId);

              if (message?.conversationId) {
                draft.push(data.message)

              } else {
                //nothing
              }
            })
          })
        } catch (error) {
          //nonthing here
        }

        await cacheEntryRemoved;
        socket.close()
      }


    }),
    addMessage: builder.mutation({
      query: (data) => ({
        url: `/messages`,
        method: "POST",
        body: data

      })

    }),

  }),
  //  overrideExisting: false 
})


// console.log(process.env.REACT_APP_API_KEY)

export const { useGetMessagesQuery, useAddMessageMutation } = messageApi

