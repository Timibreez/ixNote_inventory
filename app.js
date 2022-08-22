const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyparser = require('body-parser')
const session = require('express-session')
const {v4: uuidv4} = require('uuid')
const router = require('./routes')
const mongoose = require('mongoose')
const User = require('./models/User')

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

        app.use('/api', router)

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

        app.listen(port, () => {
            console.log('listening to the server on http://localhost:3000')
        })
    }
).catch(() => {
    console.log('Database Connection Failed')
})

