const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyparser = require('body-parser')
const session = require('express-session')
const {v4: uuidv4} = require('uuid')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/products')
const mongoose = require('mongoose')
const User = require('./models/User')
const Products = require('./models/Products')

mongoose.connect('mongodb://localhost:27017/ixnote', {useNewUrlParser: true}).then(
    () => {
        app.set('view engine', 'ejs')

        app.use(express.static('public'));
        app.use(express.urlencoded({extended:false}));

        // Get incoming request
        app.use(bodyparser.json())
        app.use(bodyparser.urlencoded({extended:true}))

        // app.use(session({
        //     secret: uuidv4,
        //     resave: false,
        //     saveUninitialized: true
        // }))

        app.use('/api/auth', authRoute)
        app.use('/api/products', productRoute)

        // app.get('/dashboard', (req, res) => {
        //     User.find({}, (err, users) => {

        //         const userMap = {};
          
        //         users.forEach((user) => {
        //             userMap[user._id] = user;
        //         });
          
        //         res.render('/dashboard', {userMap});  
        //     });
        // });

        app.get('/dashboard', (req, res) => {
            User.find({}, (err, users) => {
                res.render('dashboard', {users: users});
            })
        })

        // Login Route
        app.get('/', (req, res) => {
            res.render('index', {title: 'IXNote Enterprise | Login'})
        })

        app.get('/register', (req, res) => {
            res.render('register', {title: 'IXNote Enterprise | Register'})
        })

        app.get('/add_product', (req, res) => {
            res.render('create_products', {title: 'IXNote Enterprise | Add Products'})
        })

        app.listen(port, () => {
            console.log('listening to the server on http://localhost:3000')
        })
    }
).catch((err) => {
    console.log('Database Connection Failed:', err)
})

