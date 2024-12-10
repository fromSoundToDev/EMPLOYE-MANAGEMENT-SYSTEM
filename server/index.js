import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors'

// express server creation 

dotenv.config()
const app = express();
app.use(cors())
app.use(express.json())

const port = process.env.PORT

// listening to the port 

app.listen(port,()=>{
    console.log(`the app is listing on the port ${port}`);
})