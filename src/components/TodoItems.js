import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, deleteTodo }) {
  return (
    <div className="todo-item-container">
      <div className="todo-item">
        <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
        <span className="due-date">Due Date: {todo.dueDate ? todo.dueDate.toLocaleDateString() : 'Not set'}</span>
      </div>
      <button className="delete-button" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
