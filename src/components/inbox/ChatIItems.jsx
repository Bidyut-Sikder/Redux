import { useDispatch, useSelector } from "react-redux";
import { conversationApi, useGetConversationsQuery } from "../../features/conversations/conversationApi";
import ChatItem from "./ChatItem";
import { Link } from "react-router-dom";
import moment from "moment";
import { getPartnerInfo } from "../../utils/getPartnerInfo";
import gravatarUrl from "gravatar-url";
import Error from "../ui/Error";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

export default function ChatItems() {
    const { user } = useSelector(state => state.auth) || {}
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(2)

    const { email } = user || {};
    const { data, isLoading, isError, error } = useGetConversationsQuery(email)
    const dispatch = useDispatch()

    const { data: conversations = [], totalCount } = data || {}

    const fetchMore = () => {
        setPage((previousPage) => previousPage + 1)
    }


    useEffect(() => {

        if (page > 1) {
            dispatch(conversationApi.endpoints.getMoreConversations.initiate({ email, page }))
        }

    }, [page, dispatch, email])



    useEffect(() => {
        if (totalCount > 0) {

            const more = Math.ceil(totalCount / Number(import.meta.env.VITE_MESSAGES_PERPAGE)) > page


            setHasMore(more)
        }

    }, [totalCount, page])






    let content = null;

    if (isLoading) {
        content = <li className="m-2 text-center">Loading...</li>;
    } else if (!isLoading && isError) {

        content = (
            <li className="m-2 text-center">

                <Error message={error?.error} />
            </li>
        );
    } else if (!isLoading && !isError && conversations?.length === 0) {
        content = <li className="m-2 text-center">No conversations found!</li>;
    } else if (!isLoading && !isError && conversations?.length > 0) {

        content = <InfiniteScroll
            dataLength={conversations.length} //This is important field to render the next data
            next={fetchMore}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            height={window.innerHeight - 129}
        >
            {
                conversations.map((conversation, index) => {
                    const { id, message, timestamp } = conversation;

                    const partnerInfo = getPartnerInfo(conversation.users, email);

                    //  const modifiedId = id !== undefined ? id : index + 1

                    return (
                        <li key={index} >
                            <Link to={`/inbox/${id}`}  >
                                <ChatItem
                                    avatar={gravatarUrl(partnerInfo.email, {
                                        size: 80,
                                    })}
                                    name={partnerInfo.name}
                                    lastMessage={message}
                                    lastTime={moment(timestamp).fromNow()}
                                />
                            </Link>
                        </li>
                    );
                })
            }
        </InfiniteScroll>;


    }


    return (
        <ul>
            {content}
        </ul>
    );












}


//http://localhost:9000/conversations?participants_like=bidyutsikder420@gmail.com&_sort=timestamp&_order=desc&_page=1&_limit=5
//http://localhost:9000/conversations?participants_like=bidyutsikder420@gmail.com&_sort=timestamp&_order=desc&_page=1&_limit=5
