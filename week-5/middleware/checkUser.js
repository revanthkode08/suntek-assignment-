import { UserTypeModel } from "../models/UserModel.js"

export const checkUser=async (req,res,next)=>{
    //get user id from verified token (set by verifyToken middleware)
    let userId = req.user?.userId;
    
    if(!userId){
        return res.status(401).json({ message:"User ID not found in token"})
    }
    
    const user = await UserTypeModel.findById(userId)
    if(!user)
        return res.status(401).json({ message:"User not found"})
    if(user.role !== 'USER') 
        return res.status(403).json({message:'Only USER role can access this'})
    if(!user.isActive)
        return res.status(403).json({message:'User account is not active'})
    next()
}