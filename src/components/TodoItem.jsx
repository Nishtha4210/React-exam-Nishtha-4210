import { useState } from "react";
import { deleteTask, updateTask } from "../services/api";

const TodoItem = ({ task, refreshTasks }) => {
  const [taskStatus, setTaskStatus] = useState(task.status);


  const getTaskColor = (type) => {
    const colors = {
      Office: "border-dark bg-danger",
      Personal: "border-danger bg-warning",
      Family: "border-dark bg-success",
      Friends: "border-danger bg-info",
      Other: "border-dark bg-secondary",
    };
    return colors[type] || "border-dark bg-light";
  };


  const handleToggleStatus = async () => {
    const updatedStatus = taskStatus === 0 ? 1 : 0;
    await updateTask(task.id, { status: updatedStatus });
    setTaskStatus(updatedStatus); 
  };


  const handleDelete = async () => {
    await deleteTask(task.id);
    refreshTasks();
  };

  return (
    <div className={`card mb-2 ${getTaskColor(task.task_type)} border-2`}>
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title">{task.task}</h5>
          <p className="card-text">
            <strong>User:</strong> {task.username} | <strong>Date:</strong> {task.date}
          </p>
          <p className="badge bg-secondary">{task.task_type}</p>
        </div>
        <div>
          <input
            type="checkbox"
            className="form-check-input me-2"
            checked={taskStatus === 1}
            onChange={handleToggleStatus}
          />
          <button className="btn btn-danger btn-sm" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
