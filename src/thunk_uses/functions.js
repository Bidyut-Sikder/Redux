

 
export const fetchTodos = async (dispatch,getState) => {

    
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const resData = await res.json()


    dispatch({
        type:'loaded',
        payload: resData 
    }) 
}








