import { combineReducers } from "redux";
import filterReducer from "./filters/reducer";
import todoReducer from "./todos/reducer";









const rootReducer = combineReducers({
    filters: filterReducer,
    todos: todoReducer
})




export default rootReducer




























