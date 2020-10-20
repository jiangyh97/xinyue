require('./../connect')
var mongoose=require('mongoose')
var Schema=mongoose.Schema
var userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        maxlength:6,
        minlength:5,
        match:/^[0-9a-zA-Z][0-9a-zA-Z_]{4,5}/
    },
    nickname:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        maxlength:18,
        match:/^[0-9a-zA-Z][0-9a-zA-Z_]{5,17}/
    }
})
var userModel=mongoose.model('user',userSchema)


module.exports=userModel