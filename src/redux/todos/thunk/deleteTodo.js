import { deleted } from "../actions"





export const DeleteTodo = (todoId) => {



    return async (dispatch) => {
        const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "DELETE",

            headers: {
                "Content-Type": "application/json "
            }
        })
        //const response = await res.json()

  
        if (res.status===200) {
            dispatch(deleted(todoId))
        }


    }

}