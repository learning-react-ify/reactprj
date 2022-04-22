import { CounterContext, ThemeContext } from "./App";
import React, { useContext } from "react";

export default function DisplayCounter() {
  const counter = useContext(CounterContext);
  const { theme } = useContext(ThemeContext);
  return <div style={{ color: theme }}>Counter: {counter}</div>;
}

/*
export default class DisplayCounter extends React.Component {
  render() {
    return (
      <CounterContext.Consumer>
        {(value) => <div>Counter: {value}</div>}
      </CounterContext.Consumer>
    );
  }
}
*/
