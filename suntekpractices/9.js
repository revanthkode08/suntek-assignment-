 let student={
    sno:100,
    name:"bhanu",
    marks:[9,89,86],
    address:{
        city:"hyd",
        pincode:500088
    },
    getData:function(){
      
       greatest=this.marks[0]
        
       for (let mark of this.marks){
    
        if(greatest<mark){
            greatest=mark
        }
       }
       console.log(greatest)
       return greatest
        
       
       }
    }
 
 console.log(student.marks)
 console.log(student.address.pincode)
res=student.getData()
console.log(res)