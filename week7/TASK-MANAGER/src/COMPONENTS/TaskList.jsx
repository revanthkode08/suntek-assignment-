import React from 'react'
import TaskItem from './TaskItem'
import { useState } from 'react'

function TaskList({tasksList,changeTaskState,deleteTask}) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='bg-white rounded-2xl shadow-lg p-6'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Task List</h2>
        {
          tasksList.length==0?
          (<div className="text-center py-10 text-gray-500">
            <p className="text-lg">No tasks yet</p>
            <p className="text-sm">Add a task to get started</p>
          </div>)
          :(
          <div className='flex flex-col gap-4'>
            {
            tasksList.filter((taskObj)=>!taskObj.isComplete).map((taskObj)=><TaskItem key={taskObj.id} taskObj={taskObj} changeTaskState={()=>changeTaskState(taskObj.id)} deleteTask={()=>deleteTask(taskObj.id)}/>)
            }
            </div>
          )
        }
      </div>
      <div className='bg-white rounded-2xl shadow-lg p-6'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Completed Tasks</h2>
            {
              tasksList.length==0?
              (<div className="text-center py-10 text-gray-500">
                <p className="text-lg">No tasks yet</p>
                <p className="text-sm">Add a task to get started</p>
              </div>)
              :(tasksList.filter(task=>task.isComplete).length)==0?
              (
              <div className="text-center py-10 text-gray-500">
                <p className="text-lg">No Tasks Completed Yet....!</p>
                </div>
              )
              :
              (
              <div className='flex flex-col gap-4'>
                {
                  tasksList.filter((taskObj)=>taskObj.isComplete).map((taskObj)=><TaskItem key={taskObj.id} taskObj={taskObj} changeTaskState={()=>changeTaskState(taskObj.id)} deleteTask={()=>deleteTask(taskObj.id)}/>)
                }
                </div>
              )
          }
      </div>
    </div>
  )
}

export default TaskList