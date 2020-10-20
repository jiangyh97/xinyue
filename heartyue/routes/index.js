var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var userModel = require('./../db/model/userModel')
var bookBarModel = require('./../db/model/bookBarModel')
var bookModel = require('./../db/model/bookModel')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
//登录
router.get('/login', function (req, res, next) {
  var username = req.query.username
  var password = req.query.password
  userModel.find({ username, password }, function (err, data) {
    if (data.length > 0) {

      //token
      let content = { name: req.query.username };//要生成token的主题信息
      let secreOrPrivateKey = 'suiyi' //这是加密的key（密钥）
      let token = jwt.sign(content, secreOrPrivateKey, {
        expiresIn: 60 * 5 * 1 //5分钟后过期
      });
      res.send({ token: token, userinfo: username })
      console.log("1", data)
    } else {
      console.log("2", data)
    }

  })
});

//注册
router.post('/reg', function (req, res) {
  console.log(req.body);
  var username = req.body.username;
  var password = req.body.password;
  var nickname = req.body.nickname;
  userModel.create({ username: username, password: password, nickname: nickname }, function (err) {
    if (!err) {
      res.send({
        code: '0',
        msg: '注册成功'
      })
    } else {
      res.send({
        code: '1',
        msg: '已有用户名或昵称！'
      })
    }
  })

})

//点击书包，渲染书包，
router.get('/bar', function (req, res) {
  var token = req.query.token
  var username = req.query.username
 
  //校验
  let secreOrPrivateKey = 'suiyi'
  jwt.verify(token, secreOrPrivateKey, function (err, docs) {
    if (err) {
      res.send({
        code:'1',
        msg:'你还没有登录呢,赶快去登录吧<br><br>来自小艾的提示'
      })
    } else {
      bookBarModel.find({ username }, function (err1, doc) {
        console.log(99, doc.length)
        if (doc.length == 0) {
          res.send({
            code:'2',
            msg:'你的书包里还没有书呢，赶快去添加吧'
          })
        } else {
          res.send(doc)
        }

      })
    }
  })

})

//根据书名模糊查找
router.get('/search-link', function (req, res) {
  var bookname = req.query.bookname
 
  var reg = new RegExp(bookname)
  bookModel.find({ title: { $regex:reg}}, function (err, doc2) {
    res.send(doc2)
  })
})

//根据id精确查找
router.get('/getBookInfo', function (req, res) {
  var bookId = req.query.bookId
  bookModel.findOne({ bookId }, function (err, doc) {
    res.send(doc)
  })
})
//添加书包
router.get('/addBar', function (req, res) {
  var bookId = req.query.bookId
  var username = req.query.username
  bookBarModel.find({ username, bookId }, function (err, doc) {
    console.log(doc)
    if (doc.length > 0) {
     res.send({
       code:'1',
       msg:'该书已经存在了'
     })
    } else {
      bookModel.find({ bookId }, function (err2, doc2) {
        if (doc2) {
          var cover = doc2[0].cover;
          var description = doc2[0].description;
          var title = doc2[0].title;
          var tagList = doc2[0].tagList;
          var author = doc2[0].author;
          var status = doc2[0].status;
          var booktype = doc2[0].booktype;
          bookBarModel.create({ username: username, bookId: bookId, cover: cover, description: description, title: title, tagList: tagList, author: author, status: status, booktype: booktype }, function (err1, docs) {
            if (!err1) {
              res.send(1)
            } else {
              res.send(0)
            }
          })
        }
      })
    }
  })
})

//删除书包
router.get('/delBar', function (req, res) {
  var bookId = req.query.bookId
  var username = req.query.username
  bookBarModel.remove({ username, bookId }, function (err1, docs) {
    if (!err1) {
      console.log('已删除')
    }
  })
})

//退出登录
router.get('/destroy', function (req, res) {
  req.session.destroy()
  res.send('退出')
})



// 按条件拿取数据信息
// 男生女生
router.get('/getShuji', function (req, res) {
  var booktype = req.query.booktype
  bookModel.find({ booktype: booktype }, function (err, doc) {
    res.send(doc)
  })
})
// 完本
router.get('/getShuji2', function (req, res) {
  var status = req.query.status
  console.log(status)
  bookModel.find({ status: status }, function (err, doc) {
    res.send(doc)
  })
})
// 拿取index所需信息
router.get('/getindex',function(req,res){
  bookModel.find({},function(err,doc){
    res.send(doc)
  })
})
module.exports = router;
