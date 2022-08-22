const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    email: {type: String, unique: true},
    password: {type: String},
    firstname: {type: String},
    lastname: {type: String}
})

module.exports = mongoose.model('User', schema)
