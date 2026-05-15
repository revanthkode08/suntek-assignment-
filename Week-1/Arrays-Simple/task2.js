
const courses = ["javascript", "react", "node", "mongodb", "express"];


//Tasks:
    //1. filter() courses with name length > 5
    let result=courses.filter(element=>element.length>5)
    console.log(result)
    //2. map() to convert course names to uppercase
    let result1=courses.map(element=>element.toUpperCase())
    console.log(result1)
    //3. reduce() to generate a single string:
    let result2=courses.reduce((acc,ele)=>acc+"|"+ele)
    console.log(result2)
    

   // 4. find() the course "react"
   let result3=courses.find(ele=>ele==="react")
   console.log(result3)
  //  5. findIndex() of "node"
  let result4=courses.findIndex(ele=>ele==="node")
  console.log(result4)