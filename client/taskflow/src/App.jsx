import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5001/tasks");
    setTasks(res.data);
  };

  const handleTaskAdded = (newTask) => {
    setTasks(prevTasks => [newTask, ...prevTasks]); // functional update
  };

  return (
    <div>
      <h1>TaskFlow</h1>
      <AddTask onTaskAdded={handleTaskAdded} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
