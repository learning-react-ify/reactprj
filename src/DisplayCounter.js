import { CounterContext } from "./App";
import { useContext } from "react";

export default function DisplayCounter() {
  const value = useContext(CounterContext);
  return <div>Counter: {value}</div>;
}
