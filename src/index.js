//require("dotenv").config({path: "/.env"});

import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({path: "./.env"});

const app = express();

// basic middleware
app.use(express.json());

const start = async () => {
    try {
        await connectDB();
        const port = process.env.PORT || 8000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (err) {
        console.error("Failed to start application", err);
        process.exit(1);
    }
};

start();
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
