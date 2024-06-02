import { colorSelected } from "./actions"





export const UpdateColor = (todoId, currentColor) => {



    return async (dispatch) => {
        const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({

                color: currentColor
            }),
            headers: {
                "Content-Type": "application/json "
            }
        })
        const response = await res.json()

     //   console.log(response)

        dispatch(colorSelected(response.id, response.color))

    }

}





























