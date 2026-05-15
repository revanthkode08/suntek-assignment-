import React from 'react'
import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'
import { useState,useEffect } from 'react'
function sortTasks(tasks){
  let l=0
  let r=tasks.length-1
  let curr=0
  while(curr<=r){
    if(tasks[curr].priority==='high'){
        [tasks[curr], tasks[l]] = [tasks[l], tasks[curr]]
        l+=1
        curr+=1
    }
    else if(tasks[curr].priority==='low'){
        [tasks[curr], tasks[r]] = [tasks[r], tasks[curr]]
        r-=1
    }
    else{
      curr+=1
    }
    
  }
  return tasks
}
function TaskManager() {
    let [tasks,setTasks]=useState([])
    const addNewTasks=(obj)=>{
        let updatedTasks=sortTasks([...tasks,obj])
        setTasks(updatedTasks)
    }
    const changeTaskState=(index)=>{
        const updatedTasks=tasks.map((task)=>task.id==index?{ ...task, isComplete: !task.isComplete }:task)
        setTasks(updatedTasks)
    }
    const deleteTask=(index)=>{
        const updatedTasks=tasks.filter((task)=>task.id!=index)
        setTasks(updatedTasks)
    }

  return (
    <div className='p-2 '>
        <h1 className='text-5xl font-bold text-center text-gray-800 mb-6'>Task Manager</h1>
        <div className='flex flex-wrap justify-between bg-orange-200 rounded-2xl shadow-lg p-6 mb-6 sticky top-0'>
          <AddTaskForm addNewTasks={addNewTasks} tasks={tasks}/>
          <div className="flex gap-6">
          <div className='bg-[#ffd166] px-6 py-4 rounded-xl shadow-md text-center min-w-35'>
            <p className='text-sm text-gray-700 font-medium'>Task Count</p>
            <p className='text-2xl font-bold text-gray-900'>{tasks.length}</p>
          </div>
          <div className='bg-[#ffd166] px-6 py-4 rounded-xl shadow-md text-center min-w-35'>
            <p className='text-sm text-gray-700 font-medium'>Completed Tasks</p>
            <p className='text-2xl font-bold text-gray-900'>{tasks.filter(task => task.isComplete).length}</p>
          </div>
        </div>
        </div>
        <TaskList tasksList={[...tasks]} changeTaskState={changeTaskState} deleteTask={deleteTask}/>
    </div>
  )
}

export default TaskManager