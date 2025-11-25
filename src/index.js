//require("dotenv").config({path: "/.env"});

import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from "express";
const app = express();
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})



// First approach writting the connection of db logic in index file itself
/*
( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(err)=>{console.error("Express error",err)});
        app.listen(process.env.PORT || 8000,()=>{
            console.log(`Server is running on port ${process.env.PORT || 8000}`);
        });
        console.log("Connected to MongoDB");
    }catch(err){
        console.error("Error connecting to MongoDB", err);
    }
})()
*/
// Second approach writting the connection of db logic in separate file and importing it here
