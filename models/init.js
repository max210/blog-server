let mongoose = require('mongoose')

mongoose.connect('mongodb://192.168.99.100:32888/blog')

mongoose.connection.on('connected', (req, res) => {
  console.log('MongoDB connected success')
})
mongoose.connection.on('err', (req, res) => {
  console.log('MongoDB connected fail')
})
mongoose.connection.on('disconnected', (req, res) => {
  console.log('MongoDB connected disconnected')
})
