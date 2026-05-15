const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

  let totalMarks=0
  for(let v in marks){
    totalMarks+=marks[v]
  }

console.log("Total Marks:", totalMarks);
const numberOfSubjects = Object.keys(marks).length;
const averageMarks = totalMarks / numberOfSubjects;
console.log("Average Marks:", averageMarks);

let high=""
let highmarks=0
for(let v in marks)
{
  if(marks[v]>highmarks)
  {
    highmarks=marks[v]
    high=v
  }
}
console.log("highest scoring subject",high)
marks.coumputer=100
console.log(marks)