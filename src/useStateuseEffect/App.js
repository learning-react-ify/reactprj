import "./App.css";
import React, { useState } from "react";
import RenderDisplayCounter from "./RenderDisplayCounter";
import ThemeComp from "./ThemeComp";

export const CounterContext = React.createContext();
export const ThemeContext = React.createContext("blue");

function App() {
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState("blue");

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
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <CounterContext.Provider value={counter}>
            <RenderDisplayCounter />
          </CounterContext.Provider>
          <ThemeComp />
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
