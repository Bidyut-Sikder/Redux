import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {increment} from "../reduxSlices/CounterSlice";

const Assignment = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  const Incre = (e) => {

   // dispatch(increment({ input1:parseInt(e.target.value)}))
  };

  const handleSubmit = (e) => {
     e.preventDefault();
     //console.log(e)
  };
//{count: 5, input1: 2, input2: 5}
  return (
    <>
       {/* <h1>counnt {count.count}</h1>
      <button
        onClick={() => dispatch(increment({count: 1, input1: 2, input2: 5}))}
      >
        incre
      </button>  */}

<div>
        <section className="section">
          <header className="header">
            <div className="container">
              <div className="header-wrapper">
                {/* <img src="./image/lws-logo 1.svg" alt="logo" className="logo" /> */}
                <h1 className="name">Scoreboard</h1>
                <h5 className="total">Total</h5>
              </div>
            </div>
          </header>

          <div className="all-matches container">
            <div className="match">
              <div className="wrapper">
                <button className="lws-delete">
                  {/* <img src="./image/delete.svg" alt="" /> */}
                </button>
                <h3 className="lws-matchName">Match 1</h3>
              </div>
              <div className="inc-dec">
                <form className="incrementForm" onSubmit={handleSubmit}>
                  <h4>Increment</h4>
                  <input
                    type="number"
                    name="increment"
                    className="lws-increment"
                    onChange={(e) => Incre(e)}
                  />
                </form>
                <form onSubmit={handleSubmit} className="decrementForm">
                  <h4>Decrement</h4>
                  <input
                    type="number"
                    name="decrement"
                    className="lws-decrement"
                  />
                </form>
              </div>
              <div className="numbers">
                <h2 className="lws-singleResult">{count.count}</h2>
              </div>
            </div>
          </div>

          <div className="add_match">
            <button className="btn btn-primary ">Add Another Match</button>
            <button className="lws-reset">
              <svg
                fill="none"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                //   xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                ></path>
              </svg>
              <span>Reset</span>
            </button>
          </div>
        </section>

        <section className="mask"></section>
    </div>




    </>
  );
};

export default Assignment;
