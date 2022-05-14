import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [show, setShow] = useState(false);

  const fn = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={fn}>Toggle Modal</button>
      {show && <Modal setShow={fn} />}
    </div>
  );
}

function Modal({ setShow }) {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-backdrop" onClick={() => setShow()}></div>
      <div className="modal-body">
        <p>Hello, I'm Modal</p>
      </div>
    </div>,
    document.body
  );
}

export default App;
