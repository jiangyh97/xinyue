require('./../connect')
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var bookBarSchema = new Schema({
    username: String,
    bookId: String,//因为我拿到的是书籍表中的id
    cover: String,
    description: String,
    title: String,
    tagList: String,
    author: String,
    status: String,
    booktype: String
})
var bookBarModel = mongoose.model('bookBars', bookBarSchema)

module.exports = bookBarModel
