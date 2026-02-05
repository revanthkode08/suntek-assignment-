import exp from 'express'
import { userApp } from './apis/userroute.js'
import { productApp } from './apis/productroute.js'
import {connect} from 'mongoose'
import cookieParser from 'cookie-parser'
const app = exp()
app.use(exp.json());
app.use(cookieParser())
app.use("/user-api", userApp)
app.use("/product-api", productApp)
const PORT = 3000

async function connectdb(){
    try{
        await connect('mongodb://localhost:27017/userdb')
        console.log('db connected')
        app.listen(PORT, () => {
    console.log('server listening on port', PORT)
})
    }
catch(err){
        console.log('db connection failed', err)
    }
}
connectdb()