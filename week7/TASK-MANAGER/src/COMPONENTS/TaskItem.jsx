import React from 'react'
import { useState } from 'react'

function TaskItem({taskObj,changeTaskState,deleteTask}) {
return (
  <div className="bg-gray-50 rounded-xl shadow-md p-4">
    <div className="flex items-center justify-between">
      <div>
        <h3 className={`text-lg font-semibold ${taskObj.isComplete ?"line-through text-gray-400":"text-gray-800"}`}>
          {taskObj.title}
        </h3>
        <span className={`text-xs px-2 py-1 rounded-full text-white 
        ${taskObj.priority === "high"?"bg-red-500":taskObj.priority==="medium"?"bg-orange-500":"bg-blue-500"}`}>
          {taskObj.priority}
        </span>
      </div>
      <div className="flex gap-3">
        <button onClick={changeTaskState} className={`px-3 py-1 text-sm rounded-md ${taskObj.isComplete?"bg-green-500 text-white hover:bg-green-600":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>
          {taskObj.isComplete ? "Completed" : "Mark Done"}
        </button>
        <button onClick={deleteTask} className="px-3 py-1 text-sm rounded-md bg-red-500 text-white">Delete</button>
      </div>
    </div>
  </div>
)
}

export default TaskItem