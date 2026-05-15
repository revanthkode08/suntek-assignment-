import exp from 'express'
import {register, authenticate} from '../services/authService.js'
import {ArticleModel} from '../models/ArticleModel.js'
import { UserTypeModel } from '../models/UserModel.js'
import { checkAuthor } from '../middlewares/CheckAuthor.js'
import { verifyToken } from '../middlewares/verifyToken.js'
export const authorRoute=exp.Router()


//Register author(public)
authorRoute.post('/users',async(req,res)=>{
    //get user obj from req
    let userObj=req.body
    //call register
    const newUserObj=await register({...userObj,role:"AUTHOR"})
    //SEND RES
    res.status(201).json({message:"author registered successfully",payload:newUserObj})
})
//Authenticate author(public)

//create article(protected route)
authorRoute.post("/articles",checkAuthor,async(req,res)=>{
    //get article from req
    let article=req.body;
    //check for the author
    let author=await UserTypeModel.findById(article.author);
    
    //create article document 
    let newArticleDoc=new ArticleModel(article);
    //validate article
    await newArticleDoc.validate();
    //save article document
    let createdArticle=await newArticleDoc.save();
    //send res
    res.status(201).json({message:"article created successfully",payload:createdArticle})
})
//Read articles of author (protected route)
authorRoute.get("/articles/:authorId",verifyToken,checkAuthor,async(req,res)=>{
    //get author id from path params
    let authorId=req.params.authorId;
    //read articles by this author which are isActive true
    let articles=await ArticleModel.find({author:authorId,isArticleActive:true}).populate("author","firstName lastName email");
    //send res
    res.status(200).json({message:"articles fetched successfully",payload:articles})
})
//edit article(protected route)
authorRoute.put("/articles",verifyToken,checkAuthor,async(req,res)=>{
    //get modified article from req
    let {title,category,content,articleId,author}=req.body;
    let articleOfDB=await ArticleModel.findOne({author:author,_id:articleId});
    if(!articleOfDB){
        return res.status(404).json({message:"article not found"})
    }
    //update article
     let updatedArticle=await ArticleModel.findByIdAndUpdate(articleId,{
        $set:{title,category,content}
     },
     {new:true});
    res.status(200).json({message:"article updated successfully",payload:updatedArticle})
    })
   //delete (soft delete) of articles (protected route)
authorRoute.put('/articles/delete',verifyToken,checkAuthor,async(req,res)=>{
    //get article id and author id
    let articleId=req.body.article
    let authorId=req.body.author
    //find the article
    let articleofDB=await ArticleModel.findOne({_id:articleId,author:authorId})
    if(!articleofDB){
        return res.status(401).json({message:"Article not found"})
    }
    //soft delete the article
    await ArticleModel.findByIdAndUpdate(articleId,
        {
            $set:{isArticleActive:false}
        })
    //send res
    res.status(200).json({message:"Article deleted"})
})

// //delete(soft delete) article(protected route)
// authorRoute.put("/articles/delete",checkAuthor,async(req,res)=>{
//     //soft delete (toggle isArticleActive)
//     const {articleId,isArticleActive} = req.body;
//     if(!articleId){
//         return res.status(400).json({message:"articleId is required"})
//     }
//     const updated = await ArticleModel.findByIdAndUpdate(articleId,{isArticleActive},{new:true});
//     res.status(200).json({message:"article status updated",payload:updated})
// })
// authorRoute.delete("/articles/delete",checkAuthor,async(req,res)=>{
//     //get article id from path param and we need to make the isActive field to false
//     let articleId=req.params.articleId;
//     let authorId=req.body.author;
//     let articleOfDB=await ArticleModel.findOne({author:authorId,_id:articleId});
//     if(!articleOfDB){
//         return res.status(404).json({message:"article not found"})
//     }
//     //soft delete article
//     let deletedArticle=await ArticleModel.findByIdAndUpdate(articleId,{
//         $set:{isArticleActive:false}
//     },
//     {new:true});
//     res.status(200).json({message:"article deleted successfully",payload:deletedArticle})
// })