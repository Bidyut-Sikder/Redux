

//actions

import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux"
import { thunk } from "redux-thunk"

const postSend = () => {
    return {
        type: 'send',
    }
}
const postSucceded = (posts) => {
    return {
        type: 'succeded',
        payload: posts
    }
}

const postFail = (err) => {
    return {
        type: 'error',
        payload: err
    }
}


const init = {
    loading: false,
    posts: [],
    err: ''
}

const reducer = (state = init, action) => {

    switch (action.type) {
        case 'send':

            return {
                ...state,
                loading: true,
                err: ''
            }
        case 'succeded':

            return {
                ...state,
                loading: false,
                posts: action.payload,

                err: ''
            }
        case 'error':

            return {
                ...state,
                loading: false,
                err: action.payload,
                posts: []
            }
        default:
            return state;
    }



}


const fetchData = () => {


    return async (dispatch) => {

        dispatch(postSend())

        try {

            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            const res = await response.json()

            dispatch(postSucceded(res))

        } catch (error) {
            dispatch(postFail(error.message))
        }
    }
}





const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => {
    console.log(store.getState())
})






store.dispatch(fetchData())




















