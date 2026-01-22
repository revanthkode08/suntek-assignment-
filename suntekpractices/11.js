 //callback function
 function test1(a){
    console.log(a())
 }
 test1(function(){
    return 123;
 })
 // here , anonymous function is acallback function
//hello1 shd be called only after hello1
 //asynchronous unpredictable 