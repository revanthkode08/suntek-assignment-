
/*Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    
filter() students who passed (marks ≥ 40)
map() to add a grade field
        ≥90 → A
        ≥75 → B
        ≥60 → C
        else → D

   
reduce() to calculate average marks
find() the student who scored 92
findIndex() of student "Kiran"*/
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
filtering=students.filter(marks=>marks.marks>=40)
console.log(filtering)
// modify function 
grading=students.map(student=>{
    if(student.marks>=90){
        student.grade='A'

    }
    else if(student.marks>=75){
        student.grade='B'
    }
    else if(student.marks>=60){
        student.grade='C'
    }
    else{
        student.grade='D'
    }
    return student
})
console.log(grading)
//calculation reduce function
averagemarks=students.reduce((acc,element)=>acc+element.marks,0)/students.length
console.log(averagemarks)
findingstudent=students.find(student=>student.marks==92)
console.log(findingstudent.name)
findindexing=students.findIndex(name=>name.name==="Kiran") 
console.log(findindexing.id)
