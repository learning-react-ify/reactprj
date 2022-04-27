import "./App.css";
import React from "react";

function App() {
  return (
    <>
      <div>
        <Comp />
      </div>
    </>
  );
}

// Using switch statement
function Comp() {
  const [cond, setCond] = React.useState(false);

  const fn = () => {
    setCond(!cond);
  };

  switch (cond) {
    case true:
      return (
        <>
          <h1>Hello</h1>
          <button onClick={fn}>Toggle</button>
        </>
      );
    case false:
      return (
        <>
          <h1>World</h1>
          <button onClick={fn}>Toggle</button>
        </>
      );
  }
}

// Uisng && operator
function ___Comp() {
  const [cond, setCond] = React.useState(false);

  const fn = () => {
    setCond(!cond);
  };

  return (
    <>
      {cond && <h1>Hello</h1>}
      {!cond && <h1>World</h1>}
      <button onClick={fn}>Toggle</button>
    </>
  );
}

// Using ternary operator
function __Comp() {
  const [cond, setCond] = React.useState(false);

  const fn = () => {
    setCond(!cond);
  };

  return cond ? (
    <>
      <h1>Hello</h1>
      <button onClick={fn}>Toggle</button>
    </>
  ) : (
    <>
      <h1>World</h1>
      <button onClick={fn}>Toggle</button>
    </>
  );
}

// Using if/else
function _Comp() {
  const [cond, setCond] = React.useState(false);

  const fn = () => {
    setCond(!cond);
  };

  if (cond) {
    return (
      <>
        <h1>Hello</h1>
        <button onClick={fn}>Toggle</button>
      </>
    );
  } else {
    return (
      <>
        <h1>World</h1>
        <button onClick={fn}>Toggle</button>
      </>
    );
  }
}

export default App;
