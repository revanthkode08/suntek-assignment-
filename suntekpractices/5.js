 let skills=['python','java','c++','js']
 function checkskill(skills,skillName){
    //business logic to check skill skillName is existed or not
    for (let skill of skills){
        if(skill === skillName){
            return true
        }
    }
 }
 let status=checkskill(skills,'mangodb')
 console.log("status=",status)