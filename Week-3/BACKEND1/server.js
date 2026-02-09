import exp from 'express'
import {connect} from  'mongoose'
import {userApp} from './apis/userapi.js'
import {productApp} from './apis/productApi.js'
import cookieParser from 'cookie-parser'
//create app
const app=exp()
app.use(cookieParser())
//assign port 
const port=4000
async function connectDB(){
    try{

    
    let dbRes=await connect('mongodb://localhost:27017/anuragdb2')
    console.log("DB connection successful")
    app.listen(port,()=>{
    console.log(`server listening on port ${port}`) })

    }catch(err){
        console.log("error connecting to DB",err)
    }
//     .then(()=>{console.log("connected to DB")})
//     .catch((err)=>{console.log("error connecting to DB",err)})
 }
 

connectDB()

app.use(exp.json())
//assign port 



app.use('/user-api',userApp)
app.use('/product-api',productApp)
app.use((err,req,res,next)=>{
    res.status(500).json({message:"error occured",error:err.message})
})