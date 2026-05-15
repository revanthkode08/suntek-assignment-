import exp from 'express'
import { UserModel } from '../models/usermodel.js'
import {hash,compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../MIDDLEWARES/verify.js'

export const userApp=exp.Router()


//read users
userApp.get('/users',async(req,res)=>{
    //read users from db
    let users=await UserModel.find({},{username:1,password:1})
    //send res
    res.json({message:"users data",payload:users})
})
userApp.post('/users',async(req,res)=>{
    let newUser=req.body
    //hash password
    let hashedPassword=await hash(newUser.password,12)
    //replace plain password with hashed password
    newUser.password=hashedPassword
    //console.log(newUser);
    //create new user document 
   let newUserDoc= new UserModel(newUser)
   //save in db
   await newUserDoc.save()
    res.json({message:"New user created",payload:newUserDoc})
})
//user authentication
userApp.post('/auth',async(req,res)=>{
    //get user cred obj
    let userCred=req.body;
    //check for username
    let useroFDB=await UserModel.findOne({username:userCred.username})
    //if user not found
    if(useroFDB===null){
        return res.status(404).json({message:"Invalid username"})
    }
    //compare passwords
    let status=await compare(userCred.password,useroFDB.password)
    //if password nnot macthed
    if(status===false){
        return res.status(404).json({message:"invalid password"})
    }
    //create signed token
    let signedToken=jwt.sign({username:userCred.username},'abcdef',{expiresIn:30})
    //save token has httpOnly cookie
    res.cookie('token',signedToken,{
        httpOnly:true, //it is httpOnly cookie
        secure:false,
        sameSite:"lax"
    })
res.status(200).json({message:"login success"})
    // //send res
    // res.status(200).json({message:"login success",token:signedToken})
}
)
//
userApp.get('/users/:id',async(req,res)=>{
    let objId=req.params.id;
    let user=await UserModel.findById(objId)
    //send res
    res.status(200).json({message:"user data",payload:user})
})
//update user
userApp.put('/users/:id',async(req,res)=>{
    let objId=req.params.id;
    let modifiedUser=req.body;
    let updatedUser=await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser}},{new:true,runValidators:true})
    res.status(200).json({message:"user data updated",payload:updatedUser})
})
userApp.delete('/users/:id',async(req,res)=>{
    let objId=req.params.id;
    let deletedUser=await UserModel.findByIdAndDelete(objId)
    res.status(200).json({message:"user data deleted successfully",payload:deletedUser})
})

//test route(protected route)
userApp.get("/test",verifyToken,(req,res)=>{
    res.json({message:"test route"})
})