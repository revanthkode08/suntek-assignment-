
import {Schema,model} from 'mongoose'
 const productschema=new Schema({
    productname:{
        type:String,
        required:[true,'productname is required'],
        minLength:[4,"Min length should be 4"],
       maxLength:[6,"max length should be 6"],

    },brand:{
        type:String,
        required:[true,'brand is required']

    },
    price:{
        type:Number,
        required:[true,"price is required"]

    },

 })
 //create product model with that schema
 export const productModel=model('product',productschema)