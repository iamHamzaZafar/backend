// require('dotenv').config()
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

// Database connection.

dotenv.config({
    path: './env'
})


connectDB()















/*

    This approach is Ok but not the best approach.

import express from 'express'
const app = express()

//iife
( async ()=>{
    try {
       await  mongoose.connect(`${process.env.MONGODB_ULI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERRRR", error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Error", error)
        throw error
    }
})()

*/