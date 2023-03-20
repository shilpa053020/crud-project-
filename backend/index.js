import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import route from "./Router/route.js";
import dotenv from "dotenv";


const app = express();
dotenv.config();

//app use
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/info",route);



app.get("/",(req,res)=>{
    console.log("welcome to node.js");
    
});

//connect database
mongoose.set("strictQuery",true);
const connect = async()=>{
    try{
        mongoose.connect(process.env.DATABASE);
        console.log("connected to database");
    }catch(err){
        console.log(err);
    }    
};  

   
 //listen port    
app.listen(5000 ,()=>{
    connect();
    console.log( "server connected");
})




