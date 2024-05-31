import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:5000/api/todos");
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div className="App">
      <TodoList todos={todos} fetchTodos={fetchTodos} />
      <TodoForm fetchTodos={fetchTodos} />
    </div>
  );
}

export default App;
