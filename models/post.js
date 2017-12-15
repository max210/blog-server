let mongoose = require('mongoose')

let postSchema = new mongoose.Schema({
  title: String,
  content: String
})

let postModel = mongoose.model('posts', postSchema)

module.exports = postModel
