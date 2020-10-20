var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:123456@182.92.213.109:27017/HeartYue?authSource=admin',{useNewUrlParser:true},function(err){
    if(!err){
        console.log('MongoDb链接成功')
    }else{
        console.log('MongoDb链接失败')
    }
})