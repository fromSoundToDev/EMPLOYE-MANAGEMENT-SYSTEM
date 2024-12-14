import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import authRoute from './route/auth.route.js';

// express server creation 

dotenv.config()
const app = express();
app.use(cors())
app.use(express.json())

// connection withe the db 
const dbConnectionURL = process.env.DB_URI
try {
    mongoose
    .connect(dbConnectionURL)
    .then(()=>{
        console.log("connected sucessfuly to the DB");
    })
    
} catch (error) {
    console.log(error);
}

const port = process.env.PORT

// listening to the port 

app.listen(port,()=>{
    console.log(`the app is listing on the port ${port}`);
})

//app route
app.use('Api/auth',authRoute)

// middleware that handle error 

app.use((err,req,res,next)=>{
    const stausCode = err.status||500
    const message = err.message|| "internal error"
    return res.stausCode.json({
        stausCode,
        message,
        success:false
    })
})