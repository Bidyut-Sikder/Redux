import { useDispatch, useSelector } from "react-redux";
import VideoGridItem from "./VideoGridItem";
import { useEffect } from "react";
import { fetchVideosAsync } from "../../features/videos/videosSlice";
import Loading from "../ui/Loading";




export default function VideGrid() {


    const dispatch = useDispatch()
    const { videos, isLoding, isError, error } = useSelector(state => state.videos)
    const { tags, search } = useSelector(state => state.filter)

    useEffect(() => {

        dispatch(fetchVideosAsync({ tags, search }))


    }, [tags, search, dispatch])

    let content;

    if (isLoding) content = <Loading />

    if (!isLoding && isError) content = <div className="col-span-12"> {error}</div>

    if (!isLoding && !isError && videos?.length == 0) content = <div className="col-span-12"> No data found!</div>

    if (!isLoding && !isError && videos?.length > 0) {

        content = videos.map((item, i) => <VideoGridItem key={i} video={item} />)

    }


    return (
        <section className="pt-12">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                    {/* <VideoGridItem /> */}
                    {content}

                    {/* <div className="col-span-12">some error happened</div> */}
                </div>
            </section>
        </section>
    );
}
