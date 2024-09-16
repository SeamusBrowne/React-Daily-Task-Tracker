import React, { useState } from "react";

function AddTask({ onAddTask }) {
  const [task, setTask] = useState('');

  const submission = (e) => {
    e.preventDefault();
    if(task.trim()) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={submission}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask
