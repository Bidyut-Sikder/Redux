import { ADD, DELETE } from "./actionTypes"




export const adding = (data) => {
    return {
        type: ADD,
        payload: data
    } 
}


export const deleting = (id) => {
    
    return {
        type: DELETE,
        payload: id
    }
}


















