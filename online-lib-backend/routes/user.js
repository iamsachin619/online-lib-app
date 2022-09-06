const express  = require('express')
const routes = express.Router()
//const {userregisterctrl} = require('../controllers/users.js')
//const {userloginctrl} = require('../controllers/users.js')
const userfunctions = require('../controllers/users')

//routes.post('/userregister', userregisterctrl )
routes.post('/userregister', userfunctions.userregisterctrl )
routes.post('/userlogin', userfunctions.userloginctrl )


    
module.exports = routes