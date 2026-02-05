import express from 'express'
import { productModel } from '../models/productmodel.js'   

export const productApp = express.Router()

productApp.get('/products',async (req, res) => {
  try {
    const products=await productModel.find()
    res.json({message:"products",payload:products})
  } catch(err) {
    res.status(500).json({message:"Error fetching products", error: err.message})
  }
}) 
productApp.post('/products',async (req,res)=>{
  let newproduct = req.body
  let newproductDoc=new productModel(newproduct)
  await newproductDoc.save()
  res.status(201).json({message:"product is created",payload:newproductDoc})

})
//read product by objectID
 productApp.get("/products/:id",async(req,res)=>{
  let objId=req.params.id;
  //find product in db

  let productObj=await productModel.findById(objId)
  res.status(200).json({message:"product found",payload:productObj})
 })
 productApp.put("/products/:id",async(req,res)=>{
  let objId =req.params.id
  let modifiedproduct=req.body
  //make update
  let updatedproduct=await productModel.findByIdAndUpdate(objId,{$set:{...modifiedproduct}},{new:true})
  res.status(200).json({message:"product updated",payload:updatedproduct})
 })