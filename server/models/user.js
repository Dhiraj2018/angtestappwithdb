const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchmea = new Schema({
    email: String,
    password: String
})

module.exports= mongoose.model('user',userSchmea,'users');