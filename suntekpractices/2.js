//function declaration
function sumoftwonumbers(a,b){
    console.log("hello called")
    let sum=a+b
    return sum
}
function bignumber(a,b,c){
    if (a>b && a>c){
        return a
    }
    else if (b>a && b>c){
        return b
    }
    else{
        return c
    }
}
   
//function calling
 
 
res1=bignumber(1,2,3)
console.log(res1)