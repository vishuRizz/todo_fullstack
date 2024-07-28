import { useState } from "react";
import "./App.css";
import CreateTodo from "./component/CreateTodo";
import Todo from "./component/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
    .then((response) => response.json())
    .then((data) => setTodos(data))
    .catch((error) => console.error(error));

  function addingTodo(title, description) {
    const newTodo = {
      title: title,
      description: description,
      complete: false,
    };
    setTodos([newTodo, ...todos]);
  }

  return (
    <>
      <CreateTodo addingTodo={addingTodo} />
      <Todo todos={todos} />
    </>
  );
}

export default App;
