const mongoose =require("mongoose")

const Schema = new mongoose.Schema({
    idGoiTap:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    ten:{
        type:String,
        required:true
    },
    tuoi:{
        type:String,
        required:true
    },
    chieuCao:{
        type:String,
        required:true
    },
    canNang:{
        type:String,
        required:true
    },
   
},{timestamps:true}

)

module.exports= mongoose.model("Register", Schema)