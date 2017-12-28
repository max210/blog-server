let mongoose = require('mongoose')
let config = require('../config')

mongoose.connect(config.mongoUrl, {
  useMongoClient: true
})
mongoose.connection.on('connected', (req, res) => {
  console.log('MongoDb connected success')
})
mongoose.connection.on('error', (req, res) => {
  console.log('MongoDb connected fail')
})
mongoose.connection.on('disconnected', (req, res) => {
  console.log('MongoDb connected disconnected')
})
