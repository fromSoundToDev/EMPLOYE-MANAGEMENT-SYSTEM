import user from "../model/user.model.js"
import bcryptjs from 'bcryptjs'

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

export default signIn