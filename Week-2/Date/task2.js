// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------

//  Given:
let date=new Date()
  let enrollmentDeadline = new Date("2026-01-20");
  

// Tasks:
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
if(date<enrollmentDeadline)
    console.log("Enrollment Opened")
//       * Today is after deadline → "Enrollment Closed"
else
    console.log("Enrollment Closed")

//   2. Validate user input date:
//       * Input: "2026-02-30"
let input="2026-02-30"
console.log(new Date(input).toISOString().slice(0,10)===input?"valid date":"invalid")
//if(enrollmentDeadline)
//       * Detect whether the date is valid or invalid
