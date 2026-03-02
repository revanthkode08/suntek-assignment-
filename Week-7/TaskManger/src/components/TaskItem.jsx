function TaskItem({ task, toggleComplete, deleteTask }) {
  const priorityColor =
    task.priority === "High"
      ? "bg-red-500"
      : task.priority === "Medium"
      ? "bg-yellow-500"
      : "bg-green-500";

  return (
    <div className={`bg-white rounded shadow hover:shadow-lg transition p-4 ${task.completed ? "opacity-60" : ""}`}>
      <img
        src={task.image}
        alt={task.title}
        className="w-full h-40 object-cover rounded"
      />

      <div className="mt-3 space-y-1">
        <h3 className="text-lg font-bold">{task.title}</h3>
        <p className="text-sm text-gray-500">{task.brand}</p>
        <p className="text-sm">{task.description}</p>
        <p className="font-semibold text-blue-600">₹{task.price}</p>

        <span
          className={`inline-block text-white text-xs px-2 py-1 rounded ${priorityColor}`}
        >
          {task.priority}
        </span>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => toggleComplete(task.id)}
          className="text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;