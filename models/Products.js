const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    item: {type: String, unique: true, required: true},
    // img: {data: Buffer, type: String},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    expiringDate: {type: Date, default: new Date(), expires: 1440}
},

{timestamps: true}
)

module.exports = mongoose.model('Products', productSchema)
