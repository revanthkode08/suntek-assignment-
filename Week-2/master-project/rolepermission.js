import { courses,users,cart,roles } from "./data.js";


//   -> Get all role names
let allRoles=Object.keys(roles)
console.log(allRoles)

//   -> Check if student can delete
let canDeleteStudent=roles.student.find((e)=>e==='delete')
console.log(typeof(canDeleteStudent)==='undefined'?'cannot delete student ':'can delete student ')

//   -> Create a flat list of all unique permissions
let allUniquePermisions=roles.admin
console.log(allUniquePermisions)

//   -> Add new role moderator immutably
let newRoles=roles
newRoles.moderator=['update','delete']
console.log(newRoles)