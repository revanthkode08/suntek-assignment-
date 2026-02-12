import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
config() //process.env

export const verifyToken=async(req,res,next)=>{
  
        //read token from cookie or Authorization header
        const token = req.cookies.token 
        if(!token){
            return res.status(401).json({message:"unauthorized request. please login"})
        }

        //verify the validity of token
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        //attach decoded payload to request for downstream handlers
        req.user = decoded
        return next()
}
