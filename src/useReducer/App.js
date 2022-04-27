import "./App.css";
import React, { useReducer } from "react";

function App() {
  function reducer(state, action) {
    if (action.type === "INCREMENT") {
      return { ...state, counter: state.counter + 1 };
    }
    if (action.type === "DECREMENT") {
      return { ...state, counter: state.counter - 1 };
    }
    return state;
  }

  const initialState = {
    counter: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const incrFn = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrFn = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <>
      <div>
        <h1>Counter: {state.counter}</h1>
        <button onClick={incrFn}>Increment</button>
        <button onClick={decrFn}>Decrement</button>
      </div>
    </>
  );
}

export default App;
