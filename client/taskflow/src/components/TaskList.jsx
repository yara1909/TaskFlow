import { useEffect, useState } from "react";
import axios from "axios";
import { supabase } from "../supabaseClient";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5001/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  const updateTaskStatus = async (taskId, newStatus) => {
    try {
      const { data, error } = await supabase
        .from("tasks")
        .update({ status: newStatus })
        .eq("id", taskId);

      if (error) throw error;
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete("http://localhost:5001/tasks/" + taskId);
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel("tasks-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "tasks" },
        (payload) => {
          console.log("Realtime event:", payload);

          if (payload.eventType === "INSERT") {
            setTasks((prev) => [...prev, payload.new]);
          }

          if (payload.eventType === "DELETE") {
            setTasks((prev) =>
              prev.filter((t) => t.id !== payload.old.id)
            );
          }

          if (payload.eventType === "UPDATE") {
            setTasks((prev) =>
              prev.map((t) =>
                t.id === payload.new.id ? payload.new : t
              )
            );
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={deleteTask}
          onStatusChange={updateTaskStatus}
        />
      ))}
    </div>
  );
}
