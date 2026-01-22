//function declaration
/*function findsum(a,b){
    return a-b
}
//function expression

let findsum = function(a,b){
    return a-b
}
//array function(simplify function expression)
let findsum=(a,b) => a+b*/


/*let marks=[10,30,89,85,45]
let result1=marks.filter(element=>element<70)
console.log(result1)
//modify 
let result2=marks.map(element=>element+5)
console.log(result2)

//REDUCE(AGGRESSION)
//find sum of marks
 
//[10,30,89,85,45]
let result4=marks.reduce((accumulator,element)=>accumulator+element)
console.log(result4)
let small=marks.reduce((acc,element)=>acc<element?acc:element)
console.log(small)
small1=marks[0]
for (let mark of marks){
    if (small>mark){
        small=mark
    }
}
console.log(small1)
//find index of 23

 let result3=marks.find(element=>element==23)
 console.log(result3)*/




 let student =[
    {sno:1,name:"eleven",age:21},
    {sno:2,name:"william",age:24},
    {sno:3,name:"will",age:21},
    {sno:4,name:"DUSTIN",age:23},
    {sno:5,name:"MIKE",age:24}
]
let result1=student.filter(student=>student.age>20)
console.log(result1)
let result2=student.map(student=>{
    if(student.name=="MIKE"){
        student.age+=2
    }
    return student
})
console.log(result2)
//find the sum all age of student
let result3=student.reduce((acc,element)=>acc+element.age,0)
console.log(result3)
