import express from "express";
import{
    createuser,
    deluser,
    getuser,
    updateuser,
  } from "../controllers/controllers.js";
const route = express.Router();
//create 
route.post("/create",createuser);

//get all data
route.get("/get",getuser);

//upate user
route.put("/update",updateuser);

//delete user
route.delete("/delete/:id",deluser);


export default route;