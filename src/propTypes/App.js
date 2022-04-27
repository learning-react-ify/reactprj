import "./App.css";
import React from "react";
import PropTypes from "prop-types";

function App() {
  return (
    <>
      <div>
        <Counter value="hello" />
        <Counter value={true} />
      </div>
    </>
  );
}

function Counter({ value }) {
  return <h1>Counter: {value}</h1>;
}

Counter.propTypes = {
  value: PropTypes.string.isRequired,
};

export default App;
