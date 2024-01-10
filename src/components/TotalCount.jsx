import React from "react";

const TotalCount = ({total}) => {
  // console.log(state)

  return (
    <div>
      <h1>Total: {total()}</h1>
    </div>
  );
};

export default TotalCount;

//////////////////////////////////////////////////////////

const actions = [
  {type: "increment", payload: 1},
  {type: "increment", payload: 1},
  {type: "increment", payload: 1},
  {type: "decrement", payload: 1},
];

const initialState = {
  count: 0,
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};


const result=actions.reduce(reducerFunction,initialState)




