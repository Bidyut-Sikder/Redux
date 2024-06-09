import { useDispatch, useSelector } from "react-redux";
import Tag from "./Tag";
import { useEffect } from "react";
import { fetchTagAsync } from "../../features/tags/tagSlice";
import Loading from "../ui/Loading";

export default function Tags() {
    const dispatch = useDispatch()

    const { tags, isLoding, error, isError } = useSelector(state => state.tags)



    useEffect(() => {
        dispatch(fetchTagAsync())

    }, [])

   // console.log(tags)

    // let content;

    // if (isLoding) content = <Loading />

    // if (!isLoding && isError) content = <div className="col-span-12"> {error}</div>

    // if (!isLoding && !isError && tags?.length == 0) content = <div className="col-span-12"> No data found!</div>

    // if (!isLoding && !isError && tags?.length > 0) {

    //     content = tags.map((item, i) => <Tag key={i} tag={item} />)

    // }

    return tags?.length > 0 ? (
        <section>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                {tags.map((tag, i) => <Tag key={i} tag={tag} />)}
            </div>
        </section>
    ) : null;


}
