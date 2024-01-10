import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {adecrement, aincrement} from "./actions";

const AnotherCounter = () => {
  const state = useSelector((state) => {
    //console.log(state)
    return state.anotherCounterReducer.valuee;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h1>another Count {state}</h1>
      <button onClick={() => dispatch(aincrement(5))}>Increment</button>
      <button onClick={() => dispatch(adecrement(5))}>Deccrement</button>
    </div>
  );
};

export default AnotherCounter;
