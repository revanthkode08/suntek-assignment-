const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Tasks:
    
//Use filter() to get only inStock products
let result=cart.filter(ele=>{
    return ele.inStock==true
})
console.log(result)
/*Use map() to create a new array with:  { name, totalPrice }*/
let result3=cart.map(ele =>({
    name:ele.name,
    totalPrice : ele.price * ele.quantity
}))
console.log(result3)

//Use reduce() to calculate grand total cart value
let result5=cart.reduce((total,item)=>{
  return total+(item.price * item.quantity)
},0)
console.log(result5)
//Use find() to get details of "Mouse"
let result1=cart.find(ele=>ele.name==="Mouse")
console.log(result1)

//Use findIndex() to find the position of "Keyboard"*/
let result2=cart.findIndex(ele=>ele.name==="Keyboard")
console.log(result2)