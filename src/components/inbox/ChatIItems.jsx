import { useSelector } from "react-redux";
import { useGetConversationsQuery } from "../../features/conversations/conversationApi";
import ChatItem from "./ChatItem";
import { Link } from "react-router-dom";
import moment from "moment";
import { getPartnerInfo } from "../../utils/getPartnerInfo";
import gravatarUrl from "gravatar-url";
import Error from "../ui/Error";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ChatItems() {
    const { user } = useSelector(state => state.auth) || {}

    const { email } = user || {};
    const { data: conversations = [], isLoading, isError, error } = useGetConversationsQuery(email)


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
            next={() => console.log('fetttt..')}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            height={window.innerHeight - 129}
        >
            {
                conversations.map((conversation, index) => {
                    const { id, message, timestamp } = conversation;

                    const partnerInfo = getPartnerInfo(conversation.users, email);

                    //  const modifiedId = id !== undefined ? id : index + 1

                    return (
                        <li key={id} >
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
