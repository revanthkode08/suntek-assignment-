import Jwt from 'jsonwebtoken'


 export function verifyToken(req,res,next){
    //token verification logic
    console.log(req.cookies)
// 1.get token from req(using cookie-parser)
    let signtoken=req.cookies.token;
    if(!signtoken){
        return res.status(401).json({message:"please login first"})
    }

    //2.verify token(decode)
     let decodedToken=Jwt.verify(signtoken,'abcdef')
     console.log("decoded token",decodedToken)
     next()
 }
