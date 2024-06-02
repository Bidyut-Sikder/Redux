import { COLORCHANGED, STATUSCHANGED } from "./actionTypes"
import initialState from "./initialState"







const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUSCHANGED:
            return {
                ...state,
                status: action.payload
            }

        case COLORCHANGED:
            const { changeType, color } = action.payload

            switch (changeType) {
                case 'added':
                    return {
                        ...state,
                        colors: [
                           ...state.colors,
                            color
                        ]
                    }

                case 'removed':
                    return {
                        ...state,
                        colors: state.colors.filter(exitingColor => exitingColor !== color)
                    }


                default:
                    return state;
            }


        default:
            return state
    }
}







export default reducer




