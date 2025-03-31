import { useEffect, useState } from "react";
import { getTasks } from "../services/api";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data || []);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div className="container">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TodoItem key={task.id} task={task} refreshTasks={fetchTasks} />
        ))
      ) : (
        <p>No tasks found.</p>
      )}
    </div>
  );
};

export default TodoList;
