import { UserTypeModel } from '../models/UserModel.js'

export const checkAuthor=async(req,res,next)=>{
    
        //get author id from req body 
        let authorId = req.body?.author || req.params?.authorId;
        
        //if author is not present in req body or params, return error
        //if(!authorId){
        //     return res.status(400).json({message:"author is required"})
        // }       
        
        //check for the author
        let author = await UserTypeModel.findById(authorId);
        //if author not found
        if(!author){
            return res.status(401).json({message:"Invalid author"})
        }
        //if author found but role is different
        if( author.role!="AUTHOR"){
            return res.status(403).json({message:"user is not an  author"})
        }
        //if author is blocked by admin
        if(!author.isActive){
            return res.status(403).json({message:"author account  is not acxtive"})
        }
        
        //forword request to next author is valid, proceed to next middleware
        next();
   
}