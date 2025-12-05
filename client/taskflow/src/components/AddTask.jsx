import { useState } from "react";
import axios from "axios";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5001/tasks", {
        title,
        description,
        status,
      });

      // Clear inputs after submission
      setTitle("");
      setDescription("");
      setStatus("todo");

      // ❗ NO need for onTaskAdded or setTasks
      // Supabase realtime will update TaskList automatically
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}
