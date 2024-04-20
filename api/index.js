import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cors from 'cors' // imppppppppp

const port = 5000;
const app = express()
app.use(express.json())
app.use(cors())

dotenv.config(); 
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("connected to db")
    }).catch((err) => {
        console.log(err);
    })


app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";

    return res.status(statusCode).json({
        success: false ,
        statusCode,
        message
    })
})

 
app.listen(port ,() => {
    console.log("Server is listening on port ",port);
})         
