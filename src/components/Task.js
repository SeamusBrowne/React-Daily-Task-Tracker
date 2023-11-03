import React, { useState } from "react";

function Task(props) {

    const { id, title} = props.task;

    return  (
        <>
                <label>
                    <input type="checkbox" onChange={() => setIsChecked(!isChecked)}
                    />
                    {title}
                </label>
                <button className="task_delete" onClick={() => props.removeTask(props.columnId, id)}>X</button>
                </div>
            </div>
        </>
    )

}

export default Task;
