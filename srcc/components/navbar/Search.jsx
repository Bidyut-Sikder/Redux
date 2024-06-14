import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searched } from "../../features/filter/filterSlice";
import { useMatch, useNavigate } from "react-router-dom";

export default function Search() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const { search } = useSelector(state => state.filter)
   
    const match = useMatch('/')
    const navigate = useNavigate()
  

 



    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(searched(input))

        if (!match) {
            navigate('/')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                value={input}
                placeholder="Search"
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    );
}
