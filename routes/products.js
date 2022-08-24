const express = require('express')
const router = express.Router()
const Products = require('../models/Products')

router.post('/createProduct', (req, res) => {
    const item = req.body.item
    const price = req.body.price
    const quantity = req.body.quantity
    const expiringDate = req.body.expiringDate

    // const exp = new Date(expiringDate);
    // const now = new Date(Date.now())

    // console.log("Date.now: ", now);
    // console.log("expiringDate: ", exp);
    // const expDate = new Date(now  - exp);
    // const expDate =  exp - now
    // console.log("expiringDateFinal: ", expDate);

    const newProduct = new Products()

    newProduct.item = item
    newProduct.price = price
    newProduct.quantity = quantity
    newProduct.expiringDate = expiringDate

    newProduct.save((err, savedProduct) => {
        if (err) {
            console.log(err)
            return res.status(500).send(err)
        }
        return res.status(200).redirect('/dashboard')
    })
})

module.exports = router