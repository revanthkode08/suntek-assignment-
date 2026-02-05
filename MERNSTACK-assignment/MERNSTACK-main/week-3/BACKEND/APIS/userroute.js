
import express from 'express'
import { UserModel } from '../models/usermodel.js' 
import {hash,compare} from 'bcryptjs'  
import jwt  from 'jsonwebtoken'
import { verifyToken } from './verifyToken.js'
 

export const userApp = express.Router()

userApp.get('/users',async (req, res) => {
  try {
    const users=await UserModel.find()
    res.json({message:"users",payload:users})
  } catch(err) {
    res.status(500).json({message:"Error fetching users", error: err.message})
  }
}) 
/*userApp.post('/users',async (req,res)=>{
  try{
  let newUser = req.body
  let newUserDOC = new UserModel(newUser)
  await newUserDOC.save()
  res.status(201).json({message:"user created"})
  } catch(err) {
    res.status(500).json({message:"Error creating user", error: err.message})
  }
})*/
userApp.post('/users',async (req,res)=>{
  let newUser = req.body
  //hyash the password
  let hashedPassword=await hash(newUser.password,12)
  newUser.password=hashedPassword
  //create user in db
  let userObj=new UserModel(newUser)
  await userObj.save()
  res.status(201).json({message:"user created"})
})


userApp.post('/auth',async(req,res)=>{
  let userCred = req.body
  let userOfDB =await UserModel.findOne({username:userCred.username})
  if(userOfDB==null){
    return res.status(401).json({message:"invalid username"})

  }
  let status=await compare(userCred.password,userOfDB.password)

  if(status===false){
    return res.status(401).json({message:"invalid password"})
  }
  //create signed token
  let signtoken=jwt.sign({username:userCred.username},
    'abcdef',
    {expiresIn:30})
  res.cookie('token',signtoken,{httpOnly:true,secure:true, 
    secure:false,
    sameSite:'lax'})
  //send token in res
  res.status(200).json({message:"login success"})
  })

//read user by objectID
 userApp.get("/users/:id",async(req,res)=>{
  let objId=req.params.id;
  //find user in db

  let userObj=await UserModel.findById(objId)
  res.status(200).json({message:"user found",payload:userObj})
 })
userApp.put("/users/:id", async(req, res) => {
  let objId = req.params.id
  let modifiedUser = req.body
  //make update
  let updatedUser = await UserModel.findByIdAndUpdate(objId, {$set:{...modifiedUser}}, {new:true})
  res.status(200).json({message:"user updated", payload:updatedUser})
})
userApp.delete("/users/:id", async(req, res) => {
  let objId = req.params.id
  await UserModel.findByIdAndDelete(objId)
  res.status(200).json({message:"user deleted"})

})
userApp.get('/test',verifyToken,(req,res)=>{
  res.json({message:"user route"})
})