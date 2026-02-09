const temperatures = [32, 35, 28, 40, 38, 30, 42];
//filter() temperatures above 35
let result=temperatures.filter(element=>element>35)
console.log(result)
//map() to convert all temperatures from Celsius → Fahrenheit
let result1=temperatures.map(element=>[(element*9)/5]+32
)
console.log(result1)
//average of temperature 
let avg=temperatures.reduce((acc,element)=>acc+element)/temperatures.length
console.log(avg)
//find() first temperature above 40
let findf=temperatures.find(element=>element>40)
console.log(findf)
// 5. findIndex() of temperature 28
let index=temperatures.findIndex(element=>element===28)
console.log(index)




