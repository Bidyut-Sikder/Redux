
import { added } from "./actions"




export const addData = (inputText) => {

    return async (dispatch) => {
        const res = await fetch("http://localhost:9000/todos", {
            method: "POST",
            body: JSON.stringify({
                text: inputText,
                completed: false
            }),
            headers: {
                "Content-Type": "application/json "
            }
        })
        const response = await res.json()

        dispatch(added(response.text))

    }

}
















