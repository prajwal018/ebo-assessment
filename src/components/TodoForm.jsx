// src/components/TodoForm.js
import React, { useState } from "react";
import axios from "axios";

const TodoForm = ({ fetchTodos }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if todo is empty
    if (!todo.trim()) {
      alert("Please! Enter a task.");
      return; // Don't proceed further
    }

    await axios.post("http://localhost:5000/api/todos", { text: todo });
    setTodo("");
    fetchTodos();
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Item"
        className="todo-input"
      />
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
