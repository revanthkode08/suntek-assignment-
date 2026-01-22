/*
Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28*/
    /*const temperatures = [32, 35, 28, 40, 38, 30, 42];
    res=temperatures.filter(temperatures=>temperatures>35)
    console.log(res)
    res1=temperatures.reduce((accu,element)=>(accu+element*9/5)+32)
    console.log(res1)
    res2=temperatures.find(element=>element==40)
    console.log(res2)
    res3=temperatures.findIndex(element=>element===28)
    console.log(res3)*/




    /*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"*/

/*const courses = ["javascript", "react", "node", "mongodb", "express"];

res=courses.filter(course=>course.length>5)
console.log(res)
uppercase=courses.map(course=>course.toUpperCase())
console.log(uppercase)
res1=courses.reduce((acc,element)=>acc+"| "+element)
console.log(res1)
res2=courses.find(element=>element=="react")
console.log(res2)
res3=courses.findIndex(element=>element=="node")
console.log(res3)*/



/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
*/



/*const marks = [78, 92, 35, 88, 40, 67];
res=marks.filter(marks=>marks>=40)
console.log(res)
res1=marks.map(add=>add+5)
console.log(res1)
res2=marks.reduce((acc,element)=>acc>element?acc:element)
console.log(res2)
result3=marks.find(element=>element<40)
console.log(result3)
result4 =marks.findIndex(element=>element===92)
console.log(result4)
*/


/*You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    
Use filter() to get only inStock products
Use map() to create a new array with:  { name, totalPrice }
Use reduce() to calculate grand total cart value
Use find() to get details of "Mouse"
Use findIndex() to find the position of "Keyboard" */

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
instock=cart.filter(product=>product.inStock==true)
console.log(instock)
array=cart.map(product=>({name:product.name,totalprice:product.price*product.quantity}))
console.log(array)
grandtotal=cart.reduce((acc,element)=>acc+element.price*element.quantity,0)
console.log(grandtotal)
details=cart.find(element=>element.name=="Mouse")
console.log(details)
position=cart.findIndex(element=>element.name=="Keyboard")
console.log(position)






    
