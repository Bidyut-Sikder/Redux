import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../../features/filter/filterSlice";

export default function Tag({ tag = {} }) {

    const dispatch = useDispatch()

    const { tags } = useSelector(state => state.filter)


    const isSelected = tags.includes(tag.title) ? true : false

   // console.log(isSelected)
    const style = isSelected ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer" : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"

    const handleClick = () => {

        if (isSelected) {
            dispatch(tagRemoved(tag.title))
        } else {
            dispatch(tagSelected(tag.title))
        }

    }


    return (

        <div onClick={handleClick} className={style} >
            {tag.title}
        </div>
    );
}

{
    /* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
redux
</div> */
}
