import { useEffect, useState } from "react";
import { isValidEmail } from "../../utils/isValidEmail";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery } from "../../features/users/usersApi";
import Error from "../ui/Error";
import { conversationApi, useAddConversationMutation, useEditConversationMutation } from "../../features/conversations/conversationApi";

export default function Modal({ open, control }) {
    const dispatch = useDispatch()
    const { user: loggedInUser } = useSelector(state => state.auth)
    const { email: loggedInEmail } = loggedInUser
    const [responseErr, setResponseErr] = useState('')
    const [conversation, setConversation] = useState(undefined)

    const [addConversation, { isSuccess: isAddConversationSuccess, isLoading: isAddLoading }] = useAddConversationMutation()
    const [editConversation, { isSuccess: isEitConversationSuccess, isLoading: isEditLoading }] = useEditConversationMutation()

    /////////////////////////////
const auth=useSelector(state=>state)
    /////////////////////

    // console.log(loggedInEmail)

    const [to, setTo] = useState('')
    const [message, setMessage] = useState('')
    const [userCheck, setUserCheck] = useState(false)


    const { data: participant, isLoading, isError } = useGetUserQuery(to, {
        skip: !userCheck,
        //send request everytime
        refetch: true
    })

    const debounceHndler = (fn, delay) => {

        let timeoutId;
        return (...args) => {

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                fn(...args)
            }, delay);
        }
    }


    const doSearch = (e) => {
        if (isValidEmail(e.target.value)) {
            setUserCheck(true)
            setTo(e.target.value)
        }
    }


    const handleSearch = debounceHndler(doSearch, 500)



    const handleSubmit = (e) => {
        e.preventDefault()

        if (conversation?.length > 0) {
            editConversation({
                id: conversation[0].id,
                sender:loggedInEmail,
                data: {

                    participants: `${loggedInEmail}-${participant[0].email}`,
                    users: [
                        loggedInUser,
                        participant[0]
                    ],
                    message: message,
                    timestamp: new Date().getTime()
                } 
            })

        } else if (conversation?.length === 0) {



            addConversation(
                {
                    sender:loggedInEmail,
                    data: {

                        participants: `${loggedInEmail}-${participant[0].email}`,
                        users: [
                            loggedInUser,
                            participant[0]
                        ],
                        message: message,
                        timestamp: new Date().getTime()
                    }
                }
            )
        }
    }


    useEffect(() => {

        if (isAddConversationSuccess || isEitConversationSuccess) {
            control()
        }

    }, [isAddConversationSuccess, isEitConversationSuccess])


    useEffect(() => {
        if (participant?.length > 0 && (participant[0].email !== loggedInEmail)) {
            //check participant existance.

            dispatch(conversationApi.endpoints.getConversation.initiate({ userEmail: loggedInEmail, participantEmail: participant[0].email }))

                .unwrap()
                .then((data) => {
                    setConversation(data)
                })
                .catch((err) => {
                    setResponseErr('Something went wrong.')
                })

        }

    }, [participant, to, loggedInEmail])


    return (
        open && (
            <>
                <div
                    onClick={control}
                    className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
                ></div>
                <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Send message
                    </h2>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6" >
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="to" className="sr-only">
                                    To
                                </label>
                                <input
                                    id="to"
                                    name="to"
                                    type="email"
                                    //  value={to}
                                    onChange={handleSearch}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                    placeholder="Send to"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Message
                                </label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    id="message"
                                    name="message"
                                    type="text"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                    placeholder="Message"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                                disabled={conversation === undefined || participant?.length > 0 && (participant[0].email === loggedInEmail)}
                            >
                                Send Message
                            </button>
                        </div>

                        {participant?.length === 0 && <Error message="Participant does not exit." />}
                        {participant?.length > 0 && (participant[0].email === loggedInEmail) && <Error message="You cannot chat with yourself. Please select another participant." />}
                    </form>
                </div>
            </>
        )
    );
}
