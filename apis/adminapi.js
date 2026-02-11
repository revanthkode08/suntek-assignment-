import exp from 'express';
import {UserTypeModel} from "../models/usermodel.js"
import { register,authenticate } from '../services/authService.js';
 export  const adminRoute = exp.Router()
 



 //block/unblock user roles
adminRoute.put('/block',async(req,res)=>{
      let Uid=req.params;
    //find user and update isActive to false
    let blockedUser= await UserTypeModel.findByIdAndUpdate(Uid,{isActive:false},{new:true})
    if(!blockedUser){
        return res.status(400).json({message:`user u provide ${Uid}not found`})
    }
 
    res.status(201).json({message:"user unblocked successfully",payload:user})
  })


// unblock user role
adminRoute.put('/unblock-user/userId',async(req,res)=>{
  let {Uid} = req.params;
  //find user and update isActive to true
  let unBlockedUser=await UserTypeModel.findByIdAndUpdate(Uid,{isActive:true},{new:true})

  if(unBlockedUser){
    return res.status(404).json({message:"user not found"})
  }
  res.status(200).json({message:"user unblock successfully",payload:unBlockedUser})
})