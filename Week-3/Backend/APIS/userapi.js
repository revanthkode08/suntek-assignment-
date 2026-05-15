  import exp from 'express'
  //crwate min-express application
  export const userApp=exp.Router();
  let users=[];
userApp.get('/users',(req,res)=>{
    //send users data incresponse
   res.status(200).json({message:"all users data",payload:users})
   })
  
     //post req handling route
   userApp.post('/users',(req,res)=>{
    //get user resource from req
    let newUser=req.body
   // console.log("new user",newUser)
   //insert new users to users[]
   users.push(newUser)
   //send response
   res.status(201).json({message:"new user data",payload:users})
    
   })//put req handling route
  userApp.put('/users',(req,res)=>{
    //get modified user from request
    let modifiedUser=req.body
   // console.log(modifiedUser)
   
    //find the user with id exists in array
    let userIndex=users.findIndex(userObj=>userObj.id===modifiedUser.id)
    if(userIndex===-1){
     return res.status(404).json({message:"user not found"})
    }
    let deleteduser=users.splice(userIndex,1,modifiedUser)
    res.status(200).json({message:"user modified"});
     
    //       user.name=modifiedUser.name
    //       user.age=modifiedUser.age
        
      
  
    //   res.json({message:"user modified"})
    // }
});
  
    //if user not found,send res as "user not found "
    //if user found,then modify the user
    //send res as "user modified"



    //read user by id
    userApp.get('/users/user-id/:id',(req,res)=>{
      console.log(req.params)
      //read id from url parameter
      let userId=Number(req.params.id)
      let user=users.findIndex(userObj=>userObj.id===userId)
      if(!user){
        return res.status(404).json({message:"user not found"})
      }
      //send res
      res.status(200).json({message:"user",payload:user})

    })
   
   //delete req handling route
   userApp.delete('/users/:id',(req,res)=>{
    // console.log(req.params)
    let userId=Number(req.params.id)
     let userIndex=users.findIndex(userObj=>userObj.id===userId.id)
    if(userIndex===-1){
     return res.status(404).json({message:"user not found"})
    }
    let deleteduser=users.splice(userIndex,1)
    res.status(200).json({message:"user modified",payload:deleteduser});
     
    // let userId=Number(req.params.id)
    // let deleteduser=users.find(ele=>ele.id===userId)
    // if(!usepror){
    //   return res.status(404).json({mesage:"user not found"})
    // }
    
   
   })