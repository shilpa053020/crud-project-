import mongo from "mongoose";
const infoschema =new mongo.Schema({
    Name:{
        type:String,
        required:true,
        trim:true
    },
    Age:{
        type:Number,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    Mobile_Number:{
        type:Number,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    CreateTime:{
        type:Date,
        default:Date.now
    }
})

export default mongo.model("user",infoschema);