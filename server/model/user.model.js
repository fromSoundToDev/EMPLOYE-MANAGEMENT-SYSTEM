
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName:{type:String,require:true,},
        email:{type:String,require:true,unique:true},
        password:{type:String,require:true,unique:true},
        role:{type:String ,enum:['admin','employe'],require:true},
        profilePicture:{type:String}

    },
    {timestamps:true}
)

 const user = mongoose.model('user',userSchema)
 export default user