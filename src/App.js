import "./App.css";
import React, { useState } from "react";
import RenderDisplayCounter from "./RenderDisplayCounter";

export const CounterContext = React.createContext();

function App() {
  const [counter, setCounter] = useState(0);

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
        <button onClick={() => setCounter(counter + 1)}>Incr Counter</button>
      </div>
      <div>
        <CounterContext.Provider value={counter}>
          <RenderDisplayCounter />
        </CounterContext.Provider>
      </div>
    </div>
  );
}

export default App;
