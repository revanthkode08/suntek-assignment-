import exp from 'express'
import { UserTypeModel } from '../models/UserModel.js'
import {register, authenticate} from '../services/authService.js'
export const adminRoute=exp.Router()


//Blockusers
adminRoute.put('/block-user/:userId',async(req,res)=>{
    let {userId}=req.params;
    //find user and update isActive to false
    let blockedUser=await UserTypeModel.findByIdAndUpdate(userId,{isActive:false},{new:true})
    if(!blockedUser){
        return res.status(404).json({message:"user not found"})
    }
    res.status(200).json({message:"user blocked successfully",payload:blockedUser})
})
// // / unblock user role
adminRoute.put('/unblock-user/:userId',async(req,res)=>{
     let {userId}=req.params;
//     //find user and update isActive to true
    let unBlockedUser=await UserTypeModel.findByIdAndUpdate(userId,{isActive:true},{new:true})
    if(!unBlockedUser){
        return res.status(404).json({message:"user not found"})
    }       
       res.status(200).json({message:"user unblocked successfully",payload:unBlockedUser})
 })