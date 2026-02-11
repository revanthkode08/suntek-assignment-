import exp from 'express'
import { authenticate } from '../services/authService.js'
import { verifyToken } from '../middleware/verifyToken.js';
import { UserTypeModel } from '../models/usermodel.js';
import bcrypt from 'bcryptjs'
export const commonRouter=exp.Router()

//login
commonRouter.post("/login",async(req,res)=>{
    //get user credential object
    let userCred = req.body;
    let {token,user} = await authenticate(userCred)
    //save token as httpOnly cookie
    res.cookie("token",token,{
        httpOnly:true,//must match original settings
        secure:false,//must match original settings
        sameSite:'lax'//must match original settings
    })
    res.status(200).json({message:"login successful",payload:user})
})

commonRouter.get('/logout',(req,res)=>{
    res.clearCookie('token',{
        httpOnly:true,//must match original settings
        secure:false,//must match original settings
        sameSite:'lax'//must match original settings
    });
    res.status(200).json({message:"successfully logout"})
})

  //change password
   commonRouter.put('/change-password',async(req,res)=>{
    
        //get email, current password and new password from req body
        let {email, currentPassword, newPassword} = req.body;
        
        //validate inputs
        if(!email || !currentPassword || !newPassword){
            return res.status(400).json({message:"email, current password and new password required"})
        }
        
        // //get user id from verified token
        // let userId = req.user.userId;
        
        //find user in database
        let user = await UserTypeModel.findOne({email});
        if(!user){
            return res.status(401).json({message:"User not found"})
        }
    
        
        //verify the current password is correct
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if(!isMatch){
            return res.status(401).json({message:"Current password is incorrect"})
        }
        
        //hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        
        //replace current password with new password
        user.password = hashedPassword;
        await user.save();
        
        //send res
        res.status(200).json({message:"Password changed successfully"})
   
   })