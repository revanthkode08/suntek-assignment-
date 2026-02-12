import exp from 'express'
import { register, authenticate } from '../services/authService.js'
import { verifyToken } from '../middlewares/verifyToken.js'
import { ArticleModel } from '../models/ArticleModel.js'
import { UserTypeModel } from '../models/UserModel.js'
import { checkUser } from '../middlewares/checkUser.js'
export const userRoute=exp.Router()

//create or reg user
userRoute.post('/users',async(req,res)=>{
    // get user bj from req
    let userObj=req.body;
    // call the reg function 
    const newUserObj=await register({...userObj,role:"USER"})  // mindbblocking ideaaa
    //send res
    res.status(201).json({
        message:"user created",
        payload:newUserObj
    })
})
// auth user

//read all articls(protected route)
userRoute.get('/articles',verifyToken,checkUser,async(req,res)=>{
    //get all articles
    let articles=await ArticleModel.find({isArticleActive:true}).populate('author','firstName email')
    //send response
    res.status(200).json({message:"Articles",payload:articles})
})
// add comment to an article(protected route)
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