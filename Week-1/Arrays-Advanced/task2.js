const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

 //   1. filter() students who passed (marks ≥ 40)
 let res=students.filter(ele=>ele.marks>=40)
 console.log(res)
 //   2. map() to add a grade field
 let res1=students.map(ele=>{
   let grade;
   if(ele.marks>=90)
    grade='A'
   else if(ele.marks>=75)
    grade='B'
else if(ele.marks>=60)
    grade='C'
   else
    grade='D'
  return {
    ele,
    grade:grade
  }
 })
 console.log(res1)
 //             ≥90 → A
  //            ≥75 → B
  //            ≥60 → C
  //            else → D

//   3. reduce() to calculate average marks
let result=students.reduce((acc,ele)=>
  acc+ele.marks,0)/students.length
console.log(result)
 //  4. find() the student who scored 92
 let result1=students.find(ele=>ele.marks==92)
 console.log(result1)
  // 5. findIndex() of student "Kiran"
  let result2=students.findIndex(ele=>ele.name==="Kiran")
  console.log(result2)