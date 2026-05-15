import exp from 'express'
import { ProductModel } from '../models/ProductModel.js'

export const productRoute=exp.Router()


//create a product
productRoute.post('/products',async(req,res)=>{
    try{
        let newProduct=req.body;
        let newProductDoc=new ProductModel(newProduct)
        await newProductDoc.save()
        res.json({message:"new product created",payload:newProductDoc})
    }catch(err){
        res.status(400).json({message:"Error creating product",error:err.message})
    }
})
productRoute.get('/products',async(req,res)=>{
    try{
        let products=await ProductModel.find()
        res.json({message:"products fetched successfully",payload:products})
    }catch(err){
        res.status(400).json({message:"Error fetching products",error:err.message})
    }
} )

// Delete all products (for testing/cleanup)
productRoute.delete('/delete-all-products',async(req,res)=>{
    try{
        const result = await ProductModel.deleteMany({});
        res.status(200).json({message:`Deleted ${result.deletedCount} products`})
    }catch(err){
        res.status(400).json({message:"Delete failed",error:err.message})
    }
})