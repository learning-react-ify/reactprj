import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodo] = useState([]);

  return (
    <div
      style={{
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
        fontSize: "40px",
      }}
    >
      <div>
        <input
          id="todoText"
          type="text"
          placeholder="Enter your todo item here..."
        />
        <button onClick={() => setTodo([...todos, window.todoText.value])}>
          Add Todo
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => {
            return <li>{todo}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
