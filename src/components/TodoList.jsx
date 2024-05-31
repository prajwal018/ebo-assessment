// src/components/TodoList.js
import React from "react";
import axios from "axios";
import { TiDelete } from "react-icons/ti";

const TodoList = ({ todos, fetchTodos }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    fetchTodos();
  };

  return (
    <div className="todo-list-container">
      <h3 className="todo-header">You have {todos.length} Todos</h3>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo._id} className="todo-item">
            <div className="todo-item-content">
              <span className="todo-text">{todo.text}</span>
              <button
                onClick={() => handleDelete(todo._id)}
                className="delete-button"
              >
                <TiDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
