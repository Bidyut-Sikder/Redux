import React from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./actions";
import {INCREMENT} from "./actionsTypes";


const NewCounter = () => {
  const state = useSelector((data) => data.counterReducer.value);
  console.log(state)

  const dispatch = useDispatch();
  // console.log(count)
  return (
    <div>
      fdfd
      <h1>Count {state}</h1>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement(5))}>Deccrement</button> 
    </div>
  );
};

export default NewCounter;

// import React from "react";
// import {connect} from "react-redux";
// import {decrement, increment} from "./actions";

// const NewCounter = ({count, increment, decrement}) => {
//   // console.log(count)
//   return (
//     <div>
//       <h1>Count {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Deccrement</button>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     count: state.value,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: (value) => dispatch(increment(value)),
//     decrement: (value) => dispatch(decrement(value)),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(NewCounter);
