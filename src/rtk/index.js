import { counterActions } from "./features/counter/counterSlice.js";
import { dynamicCounterActions } from "./features/dynamicCounter/dynamicCounterSlice.js";
import { fetchPosts } from "./features/post/postSlice.js";
import store from "./store.js";





store.subscribe(() => {
  // console.log(store.getState())
     
})





//  store.dispatch(counterActions.increment(7))



// store.dispatch(counterActions.decrement(1))
// store.dispatch(counterActions.increment(1))


// store.dispatch(dynamicCounterActions.increment(50))
// store.dispatch(dynamicCounterActions.decrement(1))
// store.dispatch(dynamicCounterActions.increment(1))

  store.dispatch(fetchPosts())

   
















