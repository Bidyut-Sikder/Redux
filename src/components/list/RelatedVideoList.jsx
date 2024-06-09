
import { useDispatch, useSelector } from "react-redux";
import RelatedVideoListItem from "./RelatedVideoListItem";
import { useEffect } from "react";
import { fetchRelatedVideosAsync } from "../../features/relatedVideos/relatedVideosSlice";
import Loading from "../ui/Loading";

export default function RelatedVideoList({ tags, id }) {
    const dispatch = useDispatch()
    //  console.log(id)


    const { relatedVideos, isError, error, isLoading } = useSelector(state => state.realatedVideos)

    // console.log(relatedVideos)


    useEffect(() => {
        dispatch(fetchRelatedVideosAsync({ tags, id }))

    }, [tags, id])




    let content = null;

    if (isLoading) content = <Loading />

    if (!isLoading && isError) content = <div className="col-span-12"> {error}</div>

    //if (!isLoading && !isError && relatedVideos?.length == 0) content = <div className="col-span-12"> No data found!</div>

    if (!isLoading && !isError && relatedVideos?.length == 0) {

        content = <div className="col-span-12"> No Related Videos Found!</div>

    }

    if (!isLoading && !isError && relatedVideos?.length > 0) {

        content = relatedVideos.map((video, i) => (
            <RelatedVideoListItem key={i} video={video} />

        ))

    }

    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {/* <RelatedVideoListItem /> */}
            {content}
        </div>
    );
}
