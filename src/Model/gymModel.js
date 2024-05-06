const mongoose =require("mongoose")

const Schema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    goi:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    item1:{
        type:String,
        required:true
    },
    item2:{
        type:String,
        required:true
    },
    item3:{
        type:String,
        required:true
    },
    item4:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
},{timestamps:true}

)

module.exports= mongoose.model("Gym", Schema)