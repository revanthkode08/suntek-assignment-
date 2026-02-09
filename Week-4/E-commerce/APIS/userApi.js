import express from "express";
import { UserModel } from '../models/userModels.js';
import bcrypt from 'bcryptjs';
import { ProductModel } from "../models/ProductModel.js";
//create user router
export const userRoute=express.Router();
//creqate users
userRoute.post('/users',async(req,res)=>{
    try{
        let newUser=req.body
        //run validator
        await new UserModel(newUser).validate();
        //hash password
        let hashedPassword=await bcrypt.hash(newUser.password,12)
        newUser.password=hashedPassword
        let newUserDoc=new UserModel(newUser)
        await newUserDoc.save()
        res.json({message:"User Created",payload:newUserDoc})
    }catch(err){
        res.status(400).json({message:"Error creating user",error:err.message})
    }
})
// userApp.post('/user-api',async(req,res)=>{
//     const userobj=req.body;
    
//         const newuser=new UserModel(userobj);
//         await newuser.save();
//         res.status(201).send({message:"user created successfully"})
    
//         res.status(500).send({message:"error in creating user",error:err.message})
    

// })
userRoute.get('/users',async(req,res)=>{
    
        const users =await UserModel.find()
        res.status(200).json({message:"users fetched successfully",payload:users})
    
    }
)
//add product to user cart
userRoute.put("/user-cart/user-id/:uid/product-id/:pid",async(req,res)=>{
    //read uid and pid from url parameters
    let {uid,pid}=req.params;
    //CHECK USER
   
    let user=await UserModel.findById(uid)
    if(!user){
        return res.status(401).json({message:"user not found"})
    }
     //CHCK PRODUCT
     let product=await ProductModel.findById(pid)
        if(!product){
            return res.status(401).json({message:"product not found"})
        }
        // check if product already in user's cart (guard if cart is undefined)
        const existing = (user.cart || []).find(item => item.product.toString() === pid);
        if(existing){
            // increment quantity for existing product
            let modifiedUser = await UserModel.findOneAndUpdate(
                {_id: uid, "cart.product": pid},
                {$inc: {"cart.$.quantity": 1}},
                {new: true}
            ).populate('cart.product');
            return res.status(200).json({message:"product quantity incremented",payload:modifiedUser});
        }else{
            // push new product with quantity 1
            let modifiedUser = await UserModel.findByIdAndUpdate(
                uid,
                {$push:{cart:{product:pid, quantity:1}}},
                {new:true}
            ).populate('cart.product');
            return res.status(200).json({message:"product added to cart",payload:modifiedUser});
        }

    //perform update operation
})

userRoute.get("/users/:uid",async(req,res)=>{
    try{
        let {uid}=req.params;
        //find user
        let user=await UserModel.findById(uid).populate('cart.product');
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        //res
        res.status(200).json({message:"user",payload:user})
    }catch(err){
        // handle invalid id or other errors
        res.status(400).json({message:"Error fetching user",error:err.message})
    }
})

// Delete all users (for testing/cleanup)
// userRoute.delete("/delete-all-users",async(req,res)=>{
//     try{
//         const result = await UserModel.deleteMany({});
//         res.status(200).json({message:`Deleted ${result.deletedCount} users`})
//     }catch(err){
//         res.status(400).json({message:"Delete failed",error:err.message})
//     }
// })