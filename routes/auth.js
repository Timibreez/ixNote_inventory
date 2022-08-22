const express = require('express')
const router = express.Router()
const User = require('../models/User')

// const credentials = {
//     email: 'ffftimi@gmail.com',
//     password: 'admin123'
// }

// Login User
router.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    User.findOne({email: email, password: password}, (err, user) => {
        if(err) {
            console.log(err)
            return res.status(500).send()
        }

        if(!user) {
            return res.status(404).redirect('/')
        }
        return res.status(200).redirect('/dashboard')
    })
})

// Register User
router.post('/register', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const firstname = req.body.firstname
    const lastname = req.body.lastname

    const newUser = new User()

    newUser.email = email
    newUser.password = password
    newUser.firstname = firstname
    newUser.lastname = lastname

    newUser.save((err, savedUser) => {
        if(err){
            console.log(err)
            return res.status(500).send(err)
        }

        return res.status(200).redirect('/')
    })
})

module.exports = router