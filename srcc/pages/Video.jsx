import { useParams } from "react-router-dom";
import VideoPlayer from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";
import RelatedVideoList from "../components/list/RelatedVideoList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchVideoAsync } from "../features/video/videoSlice";
import Loading from "../components/ui/Loading";

export default function Video() {
    const { id } = useParams()
    const dispatch = useDispatch()

    const { error, isError, isLoding, video } = useSelector(state => state.video)

    const { link, title, tags, id: videoID } = video || {}


    useEffect(() => {

        dispatch(fetchVideoAsync(id))

    }, [id])

    //decide what to render

    let content = null;

    if (isLoding) content = <Loading />

    if (!isLoding && isError) content = <div className="col-span-12"> {error}</div>

    if (!isLoding && !isError && !video?.id) content = <div className="col-span-12"> No data found!</div>

    if (!isLoding && !isError && video?.id) {

        content = (
            <div className="grid grid-cols-3 gap-2 lg:gap-8">
                <div className="col-span-full w-full space-y-8 lg:col-span-2">
                    <VideoPlayer link={link} title={title} />

                    <VideoDescription video={video} />
                </div>

                <RelatedVideoList tags={tags} id={videoID} />
            </div>
        )

    }





    return (



        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                
                {content}
                
                {/* <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        <VideoPlayer />

                        <VideoDescription />
                    </div>

                    <RelatedVideoList />
                </div> */}
            </div>
        </section>



    );
}
