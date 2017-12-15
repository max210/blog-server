let mongoose = require('mongoose')

let adminSchema = new mongoose.Schema({
  name: String,
  pass: String
})

let adminModel = mongoose.model('admin', adminSchema)

module.exports = adminModel
