import React from "react";
import {connect} from "react-redux";
import {increment, decrement} from "../counter/actions";
import {aincrement, adecrement} from "../anotherCounter/actions";

const VariableCount = ({count, increment, decrement}) => {
  return (
    <div>
      <h1>{count}ee</h1>

      <button onClick={increment}>incre</button>
      <button onClick={decrement}>decre</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps.daynamic);
  return {
    count: ownProps.daynamic
      ? state.anotherCounterReducer.valuee
      : state.counterReducer.value,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: ownProps.daynamic
      ? (value) => { console.log(value.movementX) 
         return dispatch(aincrement(5))}
      : (value) => dispatch(increment(5)),
    decrement: ownProps.daynamic
      ? (value) => dispatch(adecrement(5))
      : (value) => dispatch(decrement(5)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VariableCount);
