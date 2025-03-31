import { useState } from "react";
import { addTask } from "../services/api";

const TodoForm = ({ refreshTasks }) => {
  const [task, setTask] = useState("");
  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [taskType, setTaskType] = useState("Office");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task.length < 3 || !username || isNaN(date)) return alert("Invalid input!");

    const newTask = { task, username, date, status: 0, task_type: taskType };
    await addTask(newTask);
    refreshTasks();
    setTask(""); setUsername(""); setDate(""); setTaskType("Office");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Task" value={task} onChange={(e) => setTask(e.target.value)} required />
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <input type="number" placeholder="Date (YYYYMMDD)" value={date} onChange={(e) => setDate(e.target.value)} required />
      <select value={taskType} onChange={(e) => setTaskType(e.target.value)}>
        <option value="Office">Office</option>
        <option value="Personal">Personal</option>
        <option value="Family">Family</option>
        <option value="Friends">Friends</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
