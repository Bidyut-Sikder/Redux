
import { applyMiddleware, createStore } from "redux"

import { fetchFakeData } from "./fetchData.js"
import { fetchTodos } from "./functions.js"
import { thunk } from "redux-thunk"


const initialState = {
    todos: []
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'added':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { title: action.payload }
                ]
            }

        case 'loaded':
            return {
                ...state,
                todos: [...state.todos, ...action.payload]
            }
        default:
            return state
    }
}


const store = createStore(reducer,applyMiddleware(thunk))



store.subscribe(() => {
    console.log(store.getState())
}) 



// store.dispatch({
//     type: 'added',
//     payload: 'this is bidyut'
// })

store.dispatch(fetchTodos)
























