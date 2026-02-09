import { Schema,model } from "mongoose";
//create user schema
const userSchema=new Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        minLength:[4,"minimum length should be 4 characters"],
        maxLength:[10,"maximum length exceeded 10 characters"],
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    age:{
        type:Number,
        required:[true,"age is required"],
        min:[18,"age should be 18"],
        max:[25,"maximum age should be 25"]
       },

},{
    strict:"throw",
    timestamps:true
});
//create user model with that schema
export const UserModel=model("user",userSchema)