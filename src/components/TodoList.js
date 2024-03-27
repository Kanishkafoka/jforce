import React, { useState } from 'react';
import TodoItem from './TodoItems';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './TodoList.css'; // Import CSS file for custom styling

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [dueDate, setDueDate] = useState(null); // State for storing the due date

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false, dueDate }]); // Include dueDate in todo object
      setNewTodo('');
      setDueDate(null); // Reset dueDate after adding todo
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  return (
    <div>
      {/* Navbar */}
      <nav class="navbar navbar-light">
  <div class="container-fluid">
    <div class="d-flex align-items-center">
      <span class="company-name">TODO</span>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link class="btn btn-danger" to="/">Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

      {/* Todo List */}
      <div className="todo-container mt-5">
        <h2 className="todo-heading">Todo List</h2>
        <input type="text" className="form-control mb-3" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Add new todo" />
        <DatePicker
          className="form-control mb-3"
          selected={dueDate}
          onChange={date => setDueDate(date)}
          dateFormat="MM/dd/yyyy"
          placeholderText="Select due date"
        />
        <button className="btn btn-primary mb-3" onClick={addTodo}>Add Todo</button>
        <ul className="list-group">
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;


