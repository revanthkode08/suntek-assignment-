 import jwt from "jsonwebtoken";
 
 import bcrypt from "bcryptjs";

 import {UserTypeModel} from "../models/usermodel.js";
 import {config} from "dotenv"
 //register function
 export const register = async (userObj) =>{
    //create document
    const userDoc = new UserTypeModel(userObj);
//validate for empty passwords
    await userDoc.validate();
//hash and replace plain password
    userDoc.password = await bcrypt.hash(userObj.password,10);
//save
    const created = await userDoc.save();
    //convert document to object to remove password
    const newUserObj = created.toObject();
//remove password
    delete newUserObj.password;
//return user obj without password
return newUserObj;

 };
//authenticate function
 export const authenticate = async({email,password,role})=>{
   //check user with email & role
   const user = await UserTypeModel.findOne({email,role});
   if(!user){
    const err = new Error (`email or role not found `);
    err.status = 401;
    throw err;
   }
   
    //compare the passwords
   const isMatch = await bcrypt.compare(password,user.password);
   if(!isMatch){
  const err = new Error("invalid password");
  err.status = 401;
  throw err;
 }
 //check isActive state
 if(user.isActive==false){
    const err = new Error("your account blocked.plz contact Admin");
    err.status = 403;
    throw err;
 }
 //generate token
 const token = jwt.sign({userId:user._id,
    role: user.role,email:user.email},
    process.env.JWT_SECRET,{
        expiresIn:"1hr",
 });
 const userObj = user.toObject;
 delete userObj.password
 return {token,user:userObj};


 };