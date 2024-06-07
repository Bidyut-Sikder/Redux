import { produce } from "immer"
import { createStore } from "redux"






const init = {
    name: 'bidyut',

    adderss: {
        thana: 'tungipara',
        zila: 'gopalgonj',
        post: 1122
    }
}



// const reducer = (state = init, action) => {
//     switch (action.type) {
//         case 'add':
//             return {
//                 ...state,
//                 address: {
//                     ...state.adderss,
//                     post: action.payload
//                 }
//             }

//         default:
//             return state
//     }
// }


const reducer = (state = init, action) => {
    switch (action.type) {
        case 'add':
            produce(state, (draftState) => {
                draftState.adderss.post = 123
            })

        default:
            return state
    }
}








const store = createStore(reducer)

store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch({
    type: 'add',
    payload: 'fdfdsafadsfadsf'
})













