import "./App.css";
import React, { createRef } from "react";

class App extends React.Component {
  constructor() {
    super();
    this.ref = createRef();
    this.Fn = this.Fn.bind(this);
  }

  Fn = () => {
    console.log(
      typeof this.ref.current,
      this.ref.current instanceof HTMLInputElement,
      this.ref.current instanceof HTMLElement,
      this.ref.current instanceof HTMLButtonElement
    );
    this.ref.current.value = "Hello";
    this.ref.current.style.color = "red";
  };

  render() {
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
          <input type="text" ref={this.ref} />
          <button onClick={this.Fn}>Example</button>
        </div>
      </div>
    );
  }
}

export default App;
