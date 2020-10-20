require('./../connect')
var mongoose=require('mongoose')
var Schema=mongoose.Schema
// 添加书籍信息
var bookSchema = new Schema({
    cover:{
        type:String,
        unique:true,
    },
    description:{
        type:String,
        unique:true,
    },
    title:{
        type:String,
        unique:true,
        required:true,
    },
    tagList:{
        type:String,
    },
    author:{
        type:String,
    },
    status:{
        type:String,
    },
    booktype:{
        type:String,
    },
    bookId:{
        type:String,
        unique:true,
    },
    create_At:{
        type:Date,
        default:function(){
            return Date.now()
        }
    }
})
var bookModel=mongoose.model('rankBook',bookSchema)
module.exports=bookModel