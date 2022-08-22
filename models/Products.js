const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    item: {type: String, unique: true, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    expiringDate: {type: Date, default: Date.now, expires: new Date(req.body.sleepTime)}
})

module.exports = mongoose.model('Products', productSchema)
