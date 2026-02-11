import exp from 'express';
import { register,authenticate } from "../services/authService.js";
import { UserTypeModel } from "../models/usermodel.js";
import { ArticleModel } from '../models/articlemodel.js';
import { checkAuthor } from '../middleware/checkAuthor.js';
import { verifyToken } from '../middleware/verifyToken.js';
 export  const authorRoute = exp.Router()


 //register author(public)
 authorRoute.post('/users',async(req,res)=>{
     //get author obj from req
     let userObj = req.body;
     //pass the author obj to function
     const newUserObj = await register({...userObj,role:"AUTHOR"});
     //send res
     res.status(201).json({message:"author created",payload:newUserObj});
 
  });
 //authenticate author(public)
 
 //create aritcle(private)
authorRoute.post('/articles',checkAuthor,async(req,res)=>{
    //get article from req
    let articleObj = req.body
    //check for the author
    let authorStatus = await UserTypeModel.findById(articleObj.author)
    if(!authorStatus){
        return res.status(401).json({message:"invalid author"})
    }
    // create article document
    let newArticleDoc = new ArticleModel(articleObj)
    // validate article
     await newArticleDoc.validate()
    //save
    let createdArticleDoc = await newArticleDoc.save()
    //send res
    res.status(201).json({message:"article created",payload:createdArticleDoc})


})
//read article of author(private)
authorRoute.get("/articles/:authorId",verifyToken,checkAuthor,async(req,res)=>{
    //get author id
     let aId= req.params.authorId
     //check the author
     let authorStatus = await UserTypeModel.findById(aId)
     if(!authorStatus || author.role !== "AUTHOR"){
           
        return res.status(401).json({message:"invalid author"})
     }
     //get all articles by authorid
     let articleList = await ArticleModel.find({author:aId});
      //send res
     res.status(200).json({message:"author articles",payload:articleList})

  })
  //edit article(protected)
  authorRoute.put("/articles",verifyToken,checkAuthor,async(req,res)=>{
    //get modified article from req
    let { articleId,title,content,author}=req.body;
    //find article
    let articleOfDB = await ArticleModel.findOne({_id:articleId,author:authorId});
  if (!articleOfDB) {
    return res.status(401).json({ message: "Article not found" });
  }

    
     
 

    

  
 //update article(private)
let updatedArticle = await ArticleModel.findByIdAndUpdate(
    articleId,
    {
      $set: { title, category, content },
    },
    { new: true },
  );
  //send res(updated article)
  res.status(200).json({ message: "article updated", payload: updatedArticle });
  })
   
     
 //delete (soft delete) article

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