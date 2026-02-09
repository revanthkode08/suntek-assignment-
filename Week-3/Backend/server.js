//create http server
//import express module
import { userApp } from './APIS/userapi.js'
import { productApp } from './APIS/productapi.js'
import exp, { json } from 'express'

//create server
const app=exp()

//Assign port number
app.listen(4000,()=>console.log('Http server listening in port 4000.'))

//body parsing middleware
app.use(exp.json())
app.use('/user-api',userApp)
app.use('/product-api',productApp)

//CREATING OWN MIDDLEWARE
// function middleware1(req,res,next){
//   console.log("middleware-1 executed")
//   //res.json({message:"response from middleware-1"})
//   next()
// }
// function middleware2(req,res,next){
//   console.log("middleware-2 executed")
//   next()
//   //res.json({message:"response from middleware-1"})
  
//}
//app.use(middleware1)
//app.use(middleware2)
//create API(REQUEST HANDLERS - ROUTE)
   //get req handling route
  
   
 


