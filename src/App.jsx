import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">To-Do List</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <TodoForm refreshTasks={() => window.location.reload()} />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
