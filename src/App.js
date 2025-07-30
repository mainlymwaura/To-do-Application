import React, { useState } from 'react';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    // Initialize with some sample tasks or load from localStorage
    return [
      { id: 1, description: 'Learn React', isDone: false },
      { id: 2, description: 'Build Todo App', isDone: true }
    ];
  });

  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const editTask = (id, newDescription) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1 className="app-title">Todo List</h1>
      <div className="app-container">
        <AddTask onAdd={addTask} />
        <ListTask
          tasks={tasks}
          onToggle={toggleTask}
          onEdit={editTask}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;