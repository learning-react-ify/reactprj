import "./App.css";
import React, { useState, useRef } from "react";

function App() {
  const ref = useRef();

  const Fn = () => {
    console.log(
      typeof ref.current,
      ref.current instanceof HTMLInputElement,
      ref.current instanceof HTMLElement,
      ref.current instanceof HTMLButtonElement
    );
    ref.current.value = "Hello";
    ref.current.style.color = "red";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
        fontSize: "40px",
      }}
    >
      <div>
        <input type="text" />
        <button ref={ref} onClick={Fn}>
          Example
        </button>
      </div>
    </div>
  );
}

export default App;
