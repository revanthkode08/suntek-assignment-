 import {Schema,model} from 'mongoose'
 const userschema=new Schema({
    username:{
        type:String,
        required:[true,'username is required'],
        minLength:[4,"Min length should be 4"],
       maxLength:[6,"max length should be 6"],

    },password:{
        type:String,
        required:[true,'password is required']

    },
    age:{
        type:Number,
        required:[true,"age is required"]

    },

 })
 //create user model with that schema
 export const UserModel=model('user',userschema)