import { combineReducers } from "redux";
import anotherCounterReducer from "./anotherCounter/anotherCounterReducer";
import counterReducer from "./counter/counterReducer";



const rootReducter = combineReducers({
    anotherCounterReducer: anotherCounterReducer,
    counterReducer: counterReducer
})



export default rootReducter




