// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:
//        1. Create a Date object for current date & time.
let date=new Date()
//        2. Extract and display:
//                     * Year
console.log(date.getFullYear())
//                     * Month (human readable)
console.log(date.getMonth())
//                     * Date
console.log(date.getDate())
//                     * Day of week
console.log(date.getDay())
//                     * Hours, minutes, seconds
console.log(date.getTime())

//       3. Display the date in this format:
let formatted=date.getDate().toString()+'-'+date.getMonth().toString()+'-'+date.getFullYear().toString()+' '+date.getHours().toString()+':'+date.getMinutes().toString()+':'+date.getSeconds().toString()
console.log(formatted)//                     DD-MM-YYYY HH:mm:ss






















// Assignment 3: Age Calculator (Intermediate)
// -------------------------------------------
// Input:
   let dob = new Date("2000-05-15");
   let currentdate=new Date()
   console.log(currentdate.getFullYear()-dob.getFullYear())


// Tasks:
//         1. Calculate exact age in years