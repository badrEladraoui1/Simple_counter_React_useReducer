/* eslint-disable no-unused-vars */
import React from "react";
import { useReducer } from "react";

function counterReducer(state, action) {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
  if (action.type === "RESET") {
    return {
      counter: state.counter * 0,
    };
  }
  return state;
}

function App() {
  const [counterState, counterDispatch] = React.useReducer(counterReducer, {
    counter: 0,
  });

  const handleIncrement = () => {
    counterDispatch({
      type: "INCREMENT",
    });
  };
  const handleDecrement = () => {
    counterDispatch({
      type: "DECREMENT",
    });
  };
  const handleReset = () => {
    counterDispatch({
      type: "RESET",
    });
  };

  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </p>
      <p id="counter">{counterState.counter}</p>
    </div>
  );
}

export default App;
