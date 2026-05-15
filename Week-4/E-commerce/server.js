import express from 'express';
import {connect} from 'mongoose';
import {userRoute} from './APIS/userApi.js';
import { productRoute } from './APIS/productApi.js';
//create express app
 const app=express();
//create port number
const port=4000;
app.use(express.json());
app.use('/user-api',userRoute)
app.use('/product-api',productRoute)




//database connection
async function DBconnect(){
    try{
        let dbRes= await connect('mongodb://localhost:27017/eecommerce');
        console.log("DB connected successfully");
        app.listen(port,()=>{
        console.log("server listening on port 4000");
    });

    }catch(err){
        console.log("error in connecting to database",err);
    }
    
    
}
DBconnect();
//app.use('/user-api',userApp);
