import exp from 'express'
import {authenticate} from '../services/authService.js'
import { verifyToken } from '../middlewares/verifyToken.js'
import { UserTypeModel } from '../models/UserModel.js'
import bcrypt from 'bcryptjs'
export const commonRouter=exp.Router()

//login
commonRouter.post('/login',async(req,res)=>{
      //get useer credential abject
        let userCred=req.body
        //call authenticate service
        let {token,user}=await authenticate(userCred)
        //save token as httpOnly cooke
        res.cookie("token",token,{
            httpOnly:true,
            sameSite:'lax',
            secure:false,
        });
        //send res
         res.status(200).json({message:"login successful",payload:user})

})
//logout
commonRouter.get('/Logout',(req,res)=>{
    //clear the cookie named 'token'
    res.clearCookie('token',{
        httpOnly:true,
        secure:false,

        sameSite:'lax'
    })
    res.status(200).json({message:"Logout successful"})     
    });

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