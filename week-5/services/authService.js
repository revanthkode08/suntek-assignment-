import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import {UserTypeModel} from "../models/UserModel.js"
import { config } from "dotenv" 

//register function
export const register=async(userObj)=>{
    //Create document 
    const userDoc=new UserTypeModel(userObj);
    //validate for empty password
    await userDoc.validate();
    //hash and replace plain password
    userDoc.password=await bcrypt.hash(userDoc.password,10);
    //save
    const created=await userDoc.save();
    //convert document to object to remove password
    const newUserObj=created.toObject();
    //REMOVE PASSWORD
    delete newUserObj.password;
    //return user obj withpout password
    return newUserObj;

}

//authenticate function
export const authenticate = async({email, password})=>{
    //CHECK USER WITH EMAIL AND ROLE
    const user=await UserTypeModel.findOne({email});
    if(!user){
        const err=new Error("invalid email")
        err.status=401;
        throw err
    }
    //if user valid, but blocked by admin
    if(!user.isActive){
        const err=new Error("user account is blocked")
        err.status=401;
        throw err
    }
    //compare passwords
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
     const err=new Error("invalid password")
     err.status=401
     throw err;
    }
    //generate token
    const token=jwt.sign({userId:user._id,email:user.email},process.env.JWT_SECRET,{
        expiresIn:"1h"
    });
    const userObj=user.toObject();
    delete userObj.password;
    return {token,user:userObj}
    

}