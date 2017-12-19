let express = require('express')
let router = express.Router()
let postModel = require('../models/post')  //引入post模型

//新增文章
router.post('/create', (req, res, next) => {
  let title = req.body.title
  let content = req.body.content

  let post = new postModel()
  post.title = title
  post.content = content
  post.save((err, doc) => {
    if (err) {
      next(err)
    } else {
      res.json({
        status: 0,
        msg: '创建成功'
      })
    }
  })
})

//查询文章列表
router.get('/postslist', (req, res, next) => {
  postModel.find({}, (err, posts) => {
    if (err) {
      next(err)
    } else {
      res.json({
        status: 0,
        list: posts
      })
    }
  })
})

//更改文章内容
router.post('/update', (req, res, next) => {
  let id = req.body.id
  let title = req.body.title
  let content = req.body.content

  postModel.findOneAndUpdate({_id: id}, {title, content}, err => {
    if (err) {
      next(err)
    } else {
      res.json({
        status: 0,
        msg: '更新成功'
      })
    }
  })
})

//删除文章
router.get('/delete', (req, res, next) => {
  let id = req.query.id

  postModel.remove({_id: id}, err => {
    if (err) {
      next(err)
    } else {
      res.json({
        status: 0,
        msg: '删除成功'
      })
    }
  })
})

module.exports = router
