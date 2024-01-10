import { ADECREMENT, AINCREMENT } from "./actionsTypers";



const initialState = {
    valuee: 10
}



const anotherCounterReducer = (state = initialState, action) => {
   // console.log(state)
    switch (action.type) {
        case AINCREMENT:
            return {
                ...state,
                valuee: state.valuee + action.payload
            }

        case ADECREMENT:
            return {
                ...state,
                valuee: state.valuee - action.payload
            }

        default:
            return state
    }

}

export default anotherCounterReducer












