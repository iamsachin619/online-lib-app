const express  = require('express')
const routes = express.Router()
const adminfunctions = require('../controllers/admin')


routes.post('/staffregister', adminfunctions.staffloginctrl )
routes.post('/stafflogin', adminfunctions.staffloginctrl )
routes.post('disableuser', adminfunctions.userdisable)



module.exports = routes