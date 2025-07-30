import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      onAdd(description);
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter task description..."
        className="task-input"
        aria-label="Task description"
      />
      <button type="submit" className="add-btn">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;