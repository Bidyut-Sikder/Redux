import { io } from "socket.io-client";
import { apiSlice } from "../api/api";
import { messageApi } from "../massages/massageApi";





export const conversationApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getConversations: builder.query({
            query: (email) => `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=10`,

            transformResponse: (apiResponse, meta) => {
                const total = meta.response.headers.get('X-Total-Count')




                return {
                    data: apiResponse,
                    totalCount: total
                }
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



                    socket.on("conversation", (data) => {

                        updateCachedData((draft) => {
                            const conversation = draft.data.find((conversation) =>
                                conversation.id == data?.data?.id);

                            //  console.log(conversation)

                            if (conversation?.id) {

                                conversation.message = data?.data?.message
                                conversation.timestamp = data?.data?.timestamp
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
        getMoreConversations: builder.query({
            query: ({ email, page }) => `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=${page}&_limit=5`,


            async onQueryStarted(arg, { dispatch, getState, queryFulfilled }) {



                try {
                    const conversations = await queryFulfilled
                    if (conversations?.data?.length > 0) {

                        //update conversation cache pesimistically
                        dispatch(apiSlice.util.updateQueryData('getConversations', arg.email, (draft) => {



                            return {
                                data: [...draft.data, ...conversations.data],
                                totalCount: Number(draft.totalCount)
                            }



                        }))

                    }
                } catch (error) {

                }

            }

        }),

        getConversation: builder.query({
            query: ({ userEmail, participantEmail }) => {
                return `/conversations?participants_like=${userEmail}-${participantEmail}&&participants_like=${participantEmail}-${userEmail}`;
            }

        }),
        addConversation: builder.mutation({
            query: ({ sender, data }) => ({
                url: `/conversations`,
                method: "POST",
                body: data

            }),
            async onQueryStarted(arg, { dispatch, getState, queryFulfilled }) {

                // const patchResult = dispatch(apiSlice.util.updateQueryData('getConversations', arg.sender, (draftConversations) => {

                //     const draftConversation = draftConversations.push(arg.data)


                // }))

                try {
                    const conversation = await queryFulfilled
                    if (conversation?.data?.id) {
                        const users = arg.data.users;
                        const senderUser = users.find(user => user.email === arg.sender)
                        const receiverUser = users.find(user => user.email !== arg.sender)

                        //in this way i can directly call addMessage() function in  messageApi
                        dispatch(messageApi.endpoints.addMessage.initiate({

                            "conversationId": conversation.data.id,
                            "sender": senderUser,
                            "receiver": receiverUser,
                            "message": arg.data.message,
                            "timestamp": arg.data.timestamp

                        }))

                    }
                } catch (error) {
                    patchResult.undo()
                }

            }
        }),
        editConversation: builder.mutation({
            query: ({ sender, id, data }) => ({
                url: `/conversations/${id}`,
                method: "PATCH",
                body: data

            }),
            async onQueryStarted(arg, { dispatch, getState, queryFulfilled }) {
                //optimistic cache update start(it means updating cache before response comes back.)
                const patchResult = dispatch(apiSlice.util.updateQueryData('getConversations', arg.sender, (draftConversations) => {

                    const draftConversation = draftConversations.data.find(con => con.id == arg.id)

                    draftConversation.message = arg.data.message
                    draftConversation.timestamp = arg.data.timestamp

                }))


                try {

                    const conversation = await queryFulfilled

                    if (conversation?.data?.id) {
                        const users = arg.data.users;
                        const senderUser = users.find(user => user.email === arg.sender)
                        const receiverUser = users.find(user => user.email !== arg.sender)

                        //in this way i can directly call addMessage() function in  messageApi
                        //it is called optimistic update 

                        const res = await dispatch(messageApi.endpoints.addMessage.initiate({

                            "conversationId": conversation?.data?.id,
                            "sender": senderUser,
                            "receiver": receiverUser,
                            "message": arg.data.message,
                            "timestamp": arg.data.timestamp

                        })).unwrap()



                        //pesimestic update data
                        dispatch(apiSlice.util.updateQueryData('getMessages', res.conversationId.toString(), (draftMessages) => {

                            draftMessages.push(res)


                        }))


                    }
                } catch (error) {
                    patchResult.undo()
                }

            }

        }),
    })
})





export const {
    useGetConversationsQuery,
    useAddConversationMutation,
    useEditConversationMutation,
    useGetConversationQuery,



} = conversationApi

































