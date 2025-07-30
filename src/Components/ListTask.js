import React, { useState } from 'react';
import Task from './Task';

const ListTask = ({ tasks, onToggle, onEdit, onDelete }) => {
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  return (
    <div className="task-list">
      <div className="filter-options">
        <h3>Filter Tasks:</h3>
        <div className="filter-group">
          <label className={`filter-label ${filter === 'all' ? 'active' : ''}`}>
            <input
              type="radio"
              name="filter"
              checked={filter === 'all'}
              onChange={() => setFilter('all')}
              className="filter-radio"
            />
            All
          </label>
          <label className={`filter-label ${filter === 'done' ? 'active' : ''}`}>
            <input
              type="radio"
              name="filter"
              checked={filter === 'done'}
              onChange={() => setFilter('done')}
              className="filter-radio"
            />
            Done
          </label>
          <label className={`filter-label ${filter === 'notDone' ? 'active' : ''}`}>
            <input
              type="radio"
              name="filter"
              checked={filter === 'notDone'}
              onChange={() => setFilter('notDone')}
              className="filter-radio"
            />
            Not Done
          </label>
        </div>
      </div>

      <div className="tasks-container">
        {filteredTasks.length === 0 ? (
          <p className="no-tasks">No tasks found</p>
        ) : (
          filteredTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggle={onToggle}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ListTask;