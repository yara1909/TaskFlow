import React, {useState} from "react";
import "../styles/TaskItem.css";
import { supabase } from "../supabaseClient";


export default function TaskItem({ task, onDelete, onStatusChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title);
    const [editDescription, setEditDescription] = useState(task.description);

    const handleSave = async() => { 
        const {data, error} = await supabase
            .from("tasks")
            .update({ title: editTitle, description: editDescription })
            .eq("id", task.id);

        if (error) {
            console.error("Error updating task:", error);
            return;
        }

        setIsEditing(false);
    };

    return (
        <div>
            <div className="task-item">
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />

                        <input
                            type="text"
                            value={editDescription}
                            onChange={(e) => setEditDescription(e.target.value)}
                        />

                        <button onClick={handleSave}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </>

                ) : (
                   <>
                <h3 className="task-item-title" >{task.title}</h3>
                <p className="task-item-description">{task.description}</p>

                <select
                    value={task.status}
                    onChange={(e) => onStatusChange(task.id, e.target.value)}
                    className="task-item-controls"
                >
                    <option value="todo">To Do</option>
                    <option value="in_progress">In Progress</option>
                    <option value="done">Done</option>
                </select>

                <button onClick={() => onDelete(task.id)} className="task-item-controls">Delete</button>
                <button onClick={() => setIsEditing(true)} className="task-item-controls">Edit</button>
                </>
                )}
            </div>
        </div>
    );
}