function CoursePriceTag(price)
{
   if(price<500){
    console.log("budget course")
   }else if(price >500 && price<1000){
    console.log("standard course")
   }else{
    console.log("premium course")
   }
    
}
let price=1299
let label=CoursePriceTag(price)
console.log(label)
