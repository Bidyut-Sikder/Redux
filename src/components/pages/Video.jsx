import { useParams } from "react-router-dom";
import Description from "../video/Description";
import Player from "../video/Player";
import RelatedVideos from "../video/related/RelatedVideos";
import { useGetVideoQuery } from "../../feature/api/apiSlice";
import DescriptionLoader from "../ui/loaders/DescriptionLoader";
import PlayerLoader from "../ui/loaders/PlayerLoader";
import RelatedVideoLoader from "../ui/loaders/RelatedVideoLoader";
import Error from "../ui/Error";

export default function Video() {
    const { videoId } = useParams()

    const { data: video, isLoading, isError } = useGetVideoQuery(videoId, {
        refetchOnMountOrArgChange: false
        //if its true it fetchs data every time the page is visited but if its value is 5 it will refetch it after 5 seconds 
    })

    let content = null;
    if (isLoading) {
        content = (
            <>
                <PlayerLoader />
                <DescriptionLoader />
            </>
        );
    }

    if (!isLoading && isError) {
        content = <Error message="There was an error!" />;
    }

    if (!isLoading && !isError && video?.id) {
        content = (
            <>
                <Player link={video.link} title={video.title} />
                <Description video={video} />
            </>
        );
    }


    return (
        <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        {content}
                    </div>

                    {
                        video?.id ? < RelatedVideos id={video.id} title={video.title} /> : isLoading ? (
                            <>
                                <RelatedVideoLoader />
                                <RelatedVideoLoader />
                                <RelatedVideoLoader />
                            </>
                        ) : (
                            <Error message="There was an error." />
                        )
                    }

                </div>
            </div>
        </section>
    );
}