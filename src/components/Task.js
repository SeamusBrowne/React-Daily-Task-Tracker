import React from 'react';
import Checkbox from './Checkbox';

function Task({ task, onToggle }) {
  return (
    <div className="task">
      <Checkbox isChecked={task.completed} onChange={onToggle} />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button className="task_delete" onClick={() => props.removeTask(props.columnId, id)}>X</button>
    </div>
  );
}

export default Task;
