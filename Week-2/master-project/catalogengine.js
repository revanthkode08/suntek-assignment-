import { courses   } from "./data.js";
// -> Get published courses
let publishedCourses=courses.filter(e => e.published)
console.log(publishedCourses)

//   -> Sort courses by price (high → low)
const sortedCourses=[...courses]
for(let i=0;i<sortedCourses.length;i++){
    for(let j=i+1;j<sortedCourses.length;j++){
        if(sortedCourses[i].price<sortedCourses[j].price)
            [sortedCourses[i],sortedCourses[j]]=[sortedCourses[j],sortedCourses[i]]
    }
}
console.log(sortedCourses)
//   -> Extract { title, price } only
let extractObj=courses.map((e)=>{
    return{
        'title':e.title,
        'price':e.price
    }
})
console.log(extractObj)
//   -> Calculate total value of published courses
let total=courses.reduce((a,b)=>{
    return a+=b.price
},0)
console.log(total)
//   -> Add a new course immutably
let newCourses=[...courses]
newCourses.push({
    id:5,
    title:'hello',
    price:999,
    published:true,
})
console.log(newCourses)