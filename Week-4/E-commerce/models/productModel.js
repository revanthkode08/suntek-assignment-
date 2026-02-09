import { Schema,model} from "mongoose";


  const ProductSchema=new Schema({
    productName:{
        type:String,
        requried:[true,"Product nmae requried"]
            },
    price:{
        type:Number,
        requried:[true,"Product price requried"]
    },
    brand:{
        type:String,
        requried:[true,"Product brand requried"]
    },
  })

  export const ProductModel=model("product",ProductSchema)