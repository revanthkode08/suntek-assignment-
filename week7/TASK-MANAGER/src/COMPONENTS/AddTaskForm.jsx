import React from 'react'
import {useForm} from 'react-hook-form'

function AddTaskForm({addNewTasks,tasks}) {
    let {register,handleSubmit,reset,formState:{errors}}=useForm()

    const handleForm=(obj)=>{
        addNewTasks({...obj,isComplete:false,id:tasks.length+1})
        reset()
    }
  return (
    <div className='bg-gray-50 p-4 rounded-xl shadow-sm border'>
        <form onSubmit={handleSubmit(handleForm)}>
            <div className='flex flex-wrap gap-4 items-start'>
                <div>
                    <input placeholder='Enter the Title' type="text" {...register('title',{required:true,minLength:3})} id="" className='px-3 py-2 border rounded-md'/>
                    {errors.title?.type==='required'&&<p className='text-red-900'>Title is Required</p>}
                    {errors.title?.type==='minLength'&&<p className='text-red-900'>Minimum length should be 3</p>}
                </div>
                <div>
                    <select defaultValue="" {...register('priority',{required:true})} >
                        <option value="" disabled>
                            Select the Priority
                        </option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    {errors.priority?.type==='required'&&<p className='text-red-900'>Priority is required</p>}
                </div>
            <button type="submit" className='px-3 py-1.5 bg-amber-300 border-2 rounded-md'>Add Task</button>
            </div>
        </form>
    </div>
  )
}

export default AddTaskForm