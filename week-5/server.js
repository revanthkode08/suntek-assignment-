import exp from 'express'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import { userRoute } from './APIs/UserAPI.js'
import { adminRoute } from './APIs/AdminAPI.js'
import { authorRoute } from './APIs/AuthorAPI.js'
import { commonRouter } from './APIs/CommonAPI.js'
import cookieParser from 'cookie-parser'
config() //process.env



const app=exp()
//add body parser middleware
app.use(exp.json())
//connect apis
//add cookieparser middleware
app.use(cookieParser())
app.use('/user-api',userRoute)
app.use('/admin-api',adminRoute)
app.use('/author-api',authorRoute)
app.use('/common-api',commonRouter)


//connect Database
const connectDB=async()=>{
    try{
    await connect(process.env.DB_URL)
    console.log("DB Connection Sucessful")
    //start http server
    app.listen(process.env.PORT,()=>console.log("Server Started"))
    }
    catch(err){
        console.log("Err occured",err)
    }
}
connectDB()
//dealing with invalid path
app.use((req,res,next)=>{
    res.json({message:`${req.url} is an invalid path`})
})
//error handling middleware
app.use((err,req,res,next)=>{
    console.log('err:',err)
    const status = err.status || 500
    // For JSON parse errors body-parser sets err.type === 'entity.parse.failed'
    if(err.type === 'entity.parse.failed'){
        return res.status(400).json({message:"error",reason:"Malformed JSON in request body"})
    }
    res.status(status).json({message:"error",reason:err.message})

})
