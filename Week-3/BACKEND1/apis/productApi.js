import exp from 'express'
import {ProductModel} from '../models/ProductModel.js'
export const productApp=exp.Router()
//read products
productApp.get('/products',async(req,res)=>{
    //read products from db
    let products=await ProductModel.find()
    //send res
    res.json({message:"products data",payload:products})

});
//add products
productApp.post('/products',async(req,res)=>{
    let newProduct=req.body
    //console.log(newUser);
    //create new user document 
   let newProductdoc= new ProductModel(newProduct)
   //save in db
   await newProductdoc.save()
    res.json({message:"new product created ",payload:newProductdoc})
})
//put using pid
productApp.put('/products/:pid',async (req,res)=>{
    //get obj id
    let producObjId=req.params.pid
    // get passed data
    let modifiedProduct=req.body
    // update and return modified product
    let latestProduct=await ProductModel.findByIdAndUpdate(producObjId,
        {$set:{...modifiedProduct}},
        {new:true,runValidators:true}
    )
    //send res
    res.status(200).json({message:"product updated",payload:latestProduct})

})
//get product by id
productApp.get('/products/:id',async (req,res)=>{
    // get obj id
    let productObjId=req.params.id
    // finding product
    let product=await ProductModel.findById(productObjId)
    //send res
    res.status(200).json({message:"product found",payload:product})

})
