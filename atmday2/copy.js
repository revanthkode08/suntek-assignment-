
 //when obj does not have nested obj separate operator is enough 

 let student1={
    collegeName:"anurag",
    collegeAddress:{
        street:"uppal",
        pincode:500088
    },
    studentAddress:{
        street:"kphb"
    }
 }
 let student2={...student1}
 student1.collegeName="vignan"
 student1.studentAddress.street="miyapur"
 console.log("student1:",student1)
 console.log("student2:",student2)
