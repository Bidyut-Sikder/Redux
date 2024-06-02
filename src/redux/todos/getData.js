import { loadData } from "./actions"




export const getData = async (dispatch) => {

    const res = await fetch('http://localhost:9000/todos')
    const response = await res.json()

    dispatch(loadData(response))

}




