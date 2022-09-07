const express  = require('express')
const routes = express.Router()
//const {userregisterctrl} = require('../controllers/users.js')
//const {userloginctrl} = require('../controllers/users.js')
const userfunctions = require('../controllers/admin')

//routes.post('/userregister', userregisterctrl )
routes.post('/staffregister', userfunctions.staffregisterctrl )
routes.post('/stafflogin', userfunctions.staffloginctrl )



module.exports = routes