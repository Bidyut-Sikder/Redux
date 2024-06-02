




import { added, toggled } from "./actions"




export const UpdateStatus = (todoId, currentStatus) => {

    //  console.log(todoId,currentStatus)

    return async (dispatch) => {
        const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                id: todoId,
                completed: !currentStatus
            }),
            headers: {
                "Content-Type": "application/json "
            }
        })
        const response = await res.json()


         dispatch(toggled(response.id))

    }

}


























