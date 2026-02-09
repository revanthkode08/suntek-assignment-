//import { validateDueDate,validatePriority,validateTitle } from "./validator";
  // TODO: Import validator functions
                     import { validateDueDate, validatePriority, validateTitle } from './validator.js';
                    
                    const tasks = [];
                    let taskIdCounter=1
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      
                      // Validate using imported functions
                      if(!validateTitle(title))
                        return "invalid title"
                      if(!validatePriority(priority))
                        return "Invalid Priority"
                      if(!validateDueDate(dueDate))
                        return "Invalid duedate"
                      const task={
                        title:title,
                       id:taskIdCounter,
                        priority:priority,
                        dueDate:dueDate,
                        completed: false
                      }
                    tasks.push(task)
                    taskIdCounter++;
                      // If valid, add to tasks array
                      // Return success/error message
                      return "Task added successfully"
                    }
                    console.log(addTask("internship","high","2026-04-10"))
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      return tasks
                      // Return all tasks
                    }
                    console.log(getAllTasks())
                    
                    // // 3. Mark task as complete
                     function completeTask(taskId) {

                      const task = tasks.find(t => t.id === taskId);

                     if (!task) {
                         return "Task not found";
                              }

                          task.completed = true;
                             return "Task marked as completed";
                            }

                       // Find task and mark as complete
                   console.log(completeTask(1))

                  // Export functions
                  export{completeTask,getAllTasks,addTask}