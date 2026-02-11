import { UserTypeModel } from "../models/usermodel.js";

 export const checkAuthor = (req,res,next)=>{
    //get author id
    let authorId = req.body?.author || req.params?.authorId;
    let authorStatus = new UserTypeModel.findById(authorId);
    //check if author role is valid or not 
    if(!authorStatus){
        return res.status(401).json({message:"author not found"})
    }
    if(!authorStatus.role!=='AUTHOR'){
        return res.status(401).json({message:"User is not Author"})

    }
    if(!authorStatus.isActive){
        return res.status(401).json({message:"author is not active"})
    }
    //res if invalid
    next();

 }