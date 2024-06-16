
import { useState } from "react";
import { useGetVideosQuery } from "../../feature/api/apiSlice";
import Error from "../ui/Error";
import VideoLoader from "../ui/loaders/VideoLoader";
import Video from "./Video";

export default function Videos() {

    // const { data = [], isError, isLoading } = useGetVideosQuery(undefined,{
    //     pollingInterval:3000
    // })

    const { data = [], isError, isLoading } = useGetVideosQuery(undefined, {
      // pollingInterval:3000,

    })

    let content = null;

    if (isLoading) {
        content = (
            <>
                < VideoLoader />
                < VideoLoader />
                < VideoLoader />
                < VideoLoader />
            </>
        )
    }

    if (!isLoading && isError) {
        content = <Error message='There was an error.' />

    }

    if (!isLoading && !isError && data.length == 0) {
        content = <Error message='No Data Found.' />

    }

    if (!isLoading && !isError && data.length > 0) {
        content = data.map((item, i) => <Video key={i} video={item} />)

    }






    return (
        <>
            {content}

            {/* <button onClick={() => refetch()}>refetch</button> */}
            {/* <Video />
            // <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video /> */}
        </>
    );
}
