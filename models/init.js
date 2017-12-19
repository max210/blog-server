let mongoose = require('mongoose')

mongoose.connect('mongodb://192.168.99.100:32788/blog', {
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
