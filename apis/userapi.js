import exp from 'express';
import {UserTypeModel} from "../models/usermodel.js"
import { ArticleModel } from '../models/articlemodel.js';
import { register,authenticate } from "../services/authService.js";
import { checkUser } from '../middleware/checkUser.js'; 
import { verifyToken } from '../middleware/verifyToken.js';

 export  const userRoute = exp.Router()

 //register user
 
 userRoute.post('/users',async(req,res)=>{
    //get user obj from req
    let userObj = req.body;
    //pass the user obj to function
    const newUserObj = await register({...userObj,role:"USER"});
    //send res
    res.status(201).json({message:"USER created",payload:newUserObj});

 })
 //authentication user
 

 
 //read all articles
userRoute.get("/articles/:userId",verifyToken,checkUser,async(req,res)=>{
    //get author id
     let uId= req.params.userId
     //check the author
     let userStatus = await UserTypeModel.findById(uId)
     if(!userStatus || user.role !== "USER"){
           
        return res.status(401).json({message:"invalid user"})
     }
     //get all articles by userid
     let articleList = await ArticleModel.find({user:uId});
      //send res
     res.status(200).json({message:"author articles",payload:articleList})

  })

 //add comment to article
 userRoute.post('/articles/:articleId/comment',verifyToken,checkUser,async(req,res)=>{
    //get parameters
    let { comment } = req.body
    let { articleId } = req.params
    let userId = req.user.userId
    //find article
    let updatedArticle=await ArticleModel.findByIdAndUpdate(
        articleId,
        {
            $push:{comments:{user:userId,comment:comment}}
        },
        {new:true}
    )
    //if not found
    if(!updatedArticle) 
        return res.status(404).json({message:'Article Not Found'})
    //send response
    res.status(200).json({
        message:'Comment Added',
        payload:updatedArticle
    })
})
 

 
