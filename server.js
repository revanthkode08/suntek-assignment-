import exp from 'express'
import {connect} from 'mongoose'
import {config} from 'dotenv'
import { userRoute} from './apis/userapi.js'
import { adminRoute} from './apis/adminapi.js'
import { authorRoute} from './apis/authorapi.js'
 
import { commonRouter } from './apis/commonapi.js'
import cookieParser from 'cookie-parser'

config()//process.env
const app=exp()
//add body parser middleware
app.use(exp.json())
//connect apis
// add cookieparser middleware
app.use(cookieParser())

app.use('/user-api',userRoute)
app.use('/author-api',authorRoute)
app.use('/admin-api',adminRoute)
app.use('/common-api',commonRouter)
//connect to db
const connectDB = async()=>{
    try{
  await connect(process.env.DB_URL)
  console.log("DB connection success")
  app.listen(process.env.PORT,()=>console.log(`server started`))
    }catch(err){
    console.log("err in db connection",err)
    }
}

connectDB()
//logout for User,Author and Admin

//dealing with invalid path 
app.use((req,res,next)=>{
  res.json({message:`${req.url} is an invalid path`})
})


//error handling middleware
app.use((err,req,res,next)=>{
   console.log("err",err)
   res.json({message:"error",reason:err.message})
})