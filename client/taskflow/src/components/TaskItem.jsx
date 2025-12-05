import React from "react";

export default function TaskItem({ task, onDelete, onStatusChange }) {
    return (
        <div>
            <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>

                <select
                    value={task.status}
                    onChange={(e) => onStatusChange(task.id, e.target.value)}
                >
                    <option value="todo">To Do</option>
                    <option value="in_progress">In Progress</option>
                    <option value="done">Done</option>
                </select>

                <button onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </div>
    );
}