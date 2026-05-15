import { courses,cart,roles,users } from "./data.js";
//  -> Merge cart with courses to get full course info
let updatedCart=[]
for (let c of courses){
    for (let v of cart){
        if (c.id===v.courseId){
            updatedCart.push({
                ...c,
                qty:v.qty,

            })
        }
    }
}
//   -> Calculate total cart amount
let total=0
for (let v of updatedCart){
    total+=v.price*v.qty
    
}
console.log(total)
//   -> Increase quantity of a course (immutably)
let newCourses=updatedCart.map(e=>{
    if(e.id===101){
        return{...e,qty:2}
    }
    return e
})
console.log(newCourses)
//   -> Remove a course from cart
updatedCart=updatedCart.filter(e=> e.id !== 101)
console.log(updatedCart)
//   -> Check if all cart items are paid courses
const unpaidCourse=updatedCart.find(({price}) => price===0);

if (!unpaidCourse){
  console.log('All courses are paid');
}else{
  console.log(unpaidCourse);
}