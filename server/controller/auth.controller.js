import user from "../model/user.model.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { handleError } from "../../client/src/utils/error.js"


export const signIn = async(req , res,next)=>{

    const {userName,password,email,role}=req.body
    const hashPassword = bcryptjs.hashSync(password,10)
    try {
    const newUser = new user({userName,password:hashPassword,email,role})
    await newUser.save()
    res.status(201).json("user created")
    } catch (error) {
        next(error)
    }

} 

export const signUp =async (req,res,next)=>{
   const {email,password} = req.body
   
   try {
    const   isMatch =  await user.findOne({email})
    
    if(!isMatch){
        next(handleError(404,"user not found"));
        return;
    }
    const comparepassword = bcryptjs.compareSync(password,isMatch.password)
    if(!comparepassword){
        next(handleError(404,"user not found"))
        return;
    }
    
    const token = jwt.sign({_id:isMatch._id,role:isMatch.role},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

    const User = isMatch.toObject()
    delete User.password

    res.status(200).json({
        token,
        User
    })

   } catch (error) {
    next(error)
   }
}

