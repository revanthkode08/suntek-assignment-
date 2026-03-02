import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="w-full max-w-5xl">
      <h1 className="text-3xl font-bold text-center mb-6">
        🛍️ Product Task Manager
      </h1>

      <div className="flex justify-between mb-4 bg-white p-4 rounded shadow">
        <p>Total Tasks: <span className="font-semibold">{tasks.length}</span></p>
        <p>Completed: <span className="font-semibold text-green-600">{completedCount}</span></p>
      </div>

      <AddTaskForm addTask={addTask} />

      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default TaskManager;