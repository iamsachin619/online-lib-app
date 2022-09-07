const express  = require('express')
const routes = express.Router()
const adminfunctions = require('../controllers/admin')


routes.post('/staffregister', adminfunctions.staffregisterctrl )
routes.post('/stafflogin', adminfunctions.staffloginctrl )
routes.post('/disableuser', adminfunctions.userdisable)
routes.post('/enableuser', adminfunctions.userenable)



module.exports = routes