import "./App.css";
import React, { useReducer } from "react";

function App() {
  return (
    <>
      <div>
        <Counter />
      </div>
    </>
  );
}

function Counter({ value }) {
  return <h1>Counter: {value}</h1>;
}

Counter.defaultProps = {
  value: 0,
};

export default App;
