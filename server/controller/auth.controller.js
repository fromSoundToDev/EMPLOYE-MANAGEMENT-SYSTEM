import user from "../model/user.model.js"
import bcryptjs, { compareSync } from 'bcryptjs'

const signIn = async(req , res)=>{

    const {userName,password,email,role}=req.body
    const hashPassword = bcryptjs.hashSync(password,10)
    try {
    const newUser = new user({userName,password:hashPassword,email,role})
    await newUser.save()
    res.status(200).json("user created")
    } catch (error) {
        res.status(500).json(error.message)
    }

} 

const signUp =async (req,res)=>{
   const {email,password} = req.body
   try {
    const   user =  await user.findOne({email})
    if(!user){
        return res.status(404).json('user not not allowed')
    }
    const comparepassword = bcryptjs.compareSync(password,user.password)
   } catch (error) {
    
   }
}

export default {signIn , signUp}