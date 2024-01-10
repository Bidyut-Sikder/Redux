import React, {useState} from "react";

const Counter = ({id, count, increment, decrement}) => {
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => increment(id)}>Increment</button>
      <button onClick={() => decrement(id)}>Decrement</button>
    </div>
  );
};

export default Counter;




