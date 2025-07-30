import React, { useState } from 'react';

const Task = ({ task, onToggle, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editedDescription.trim()) {
      onEdit(task.id, editedDescription);
      setIsEditing(false);
    }
  };

  return (
    <div className={`task ${task.isDone ? 'done' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="edit-form">
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            autoFocus
          />
          <div className="edit-buttons">
            <button type="submit" className="save-btn">Save</button>
            <button 
              type="button" 
              onClick={() => setIsEditing(false)}
              className="cancel-btn"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="task-content">
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={() => onToggle(task.id)}
            className="task-checkbox"
          />
          <span className="task-description">{task.description}</span>
          <div className="task-actions">
            <button 
              onClick={() => setIsEditing(true)}
              className="edit-btn"
            >
              Edit
            </button>
            <button 
              onClick={() => onDelete(task.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;