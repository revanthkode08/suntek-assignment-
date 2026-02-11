import { Schema,model } from "mongoose";
const userSchema = new Schema({
 firstName:{
    type:String,
    required:[true,"firstName is required"]
 },
  lastName:{
    type:String,
    required:[true,"lastName is required"]
 },
 email:{
    type:String,
    required:[true,"email is required"],
    unique:[true,"email already existed"]
 },
 password:{
    type:String,
    required:[true,"password is required"]
 },
 profileImageUrl:{
    type:String,
  
 },
 role:{
    type:String,
    enum:["AUTHOR","USER","ADMIN"],
    required:[true,"{Value} is an invalid role"],
    
 },
 isActive:{
    type:Boolean,
    default:true,
 },
},
{
    timestamps:true,
    strict:"throw",
    versionKey:false
})

const UserTypeModel=model("user",userSchema)

export {UserTypeModel}

