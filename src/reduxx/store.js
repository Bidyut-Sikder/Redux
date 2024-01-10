 import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer from "./counter/counterReducer";
import anotherCounterReducer from "./anotherCounter/anotherCounterReducer";
import rootReducter from "./rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";

import assReducer from '../reduxx/assignment2/AssReducer'




// //Redux middleware

const myMiddleWare = (store) => (next) => (action) => {
  //  console.log(` actions: ${JSON.stringify(action)} `)
  //  console.log(`previousState/currentState: ${JSON.stringify(store.getState())}`)


//     const upcommingState = [action].reduce(combineReducers({
//         anotherCounterReducer, counterReducer,assReducer
//     }), store.getState())
//    console.log(`UpcommingState: ${JSON.stringify(upcommingState)} `)
   
   
   next(action)
}






//const store = createStore(anotherCounterReducer) 
//to use more then 1 reducer we need to use combine reducter
const store = createStore(combineReducers({
    anotherCounterReducer, counterReducer,assReducer
}), composeWithDevTools(applyMiddleware(myMiddleWare,logger)))



// const store=createStore(combineReducers({
//     assReducer:assReducer
// }))
// //console.log(store)

export default store













////////////////////////////////////////////////////////////////





