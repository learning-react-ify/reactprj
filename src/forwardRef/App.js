import "./App.css";
import React, { forwardRef, useRef } from "react";

function App() {
  return <Comp />;
}

const ButtonComp = forwardRef(function (props, ref) {
  const fn = () => {
    ref.current.value = "hello world";
    console.log(ref.current);
  };
  return <button onClick={fn}>Click Me</button>;
});

// function ButtonComp({ abc }, ref) {
//   const fn = () => {
//     console.log(abc);
//     console.log(ref.current);
//   };
//   return <button onClick={fn}>Click Me</button>;
// }

function Comp() {
  const ref = useRef();
  return (
    <div>
      <input ref={ref} type="text" />
      <ButtonComp ref={ref} abc="hello" />
    </div>
  );
}

export default App;
