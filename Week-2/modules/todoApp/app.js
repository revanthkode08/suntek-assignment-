//app.js - Main application
                  // TODO: Import task functions
                 // app.js - Main application

// Import task functions
import { addTask, getAllTasks, completeTask } from "./task.js";

console.log("=== TODO APP STARTED ===");

// 1. Add some tasks
console.log(addTask("internship", "high", "2026-04-10"));
console.log(addTask("learn javascript", "medium", "2026-06-01"));

// 2. Display all tasks
console.log("\nAll Tasks:");
console.log(getAllTasks());

// 3. Complete a task
console.log("\nCompleting task with ID 1:");
console.log(completeTask(1));

// 4. Display all tasks again
console.log("\nTasks After Completion:");
console.log(getAllTasks());
