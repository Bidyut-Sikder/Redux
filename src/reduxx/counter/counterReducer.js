import { DECREMENT, INCREMENT } from "./actionsTypes";



const initialState = {
    value: 0
}



 const counterReducer = (state= initialState, action) => {

    switch (action.type) {
        case INCREMENT:
        console.log('here')
            return {
                ...state,
                value: state.value + action.payload
            }

        case DECREMENT:
            return {
                ...state,
                value: state.value - 10
            }

        default:
            return state
    }

}

export default counterReducer












