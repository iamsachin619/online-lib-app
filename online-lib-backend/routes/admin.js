const express  = require('express')
const { verify } = require('jsonwebtoken')
const routes = express.Router()
const adminfunctions = require('../controllers/admin')
const { verifyToken, verifyAdmin } = require('../util/verify')


routes.post('/staffregister',verifyToken, verifyAdmin, adminfunctions.staffregisterctrl )
// routes.post('/stafflogin', adminfunctions.staffloginctrl )
routes.post('/disableuser',verifyToken, verifyAdmin, adminfunctions.userdisable)
routes.post('/enableuser',verifyToken, verifyAdmin, adminfunctions.userenable)
routes.get('/getUserList',verifyToken, verifyAdmin, adminfunctions.listOfUsers)
routes.post('/searchUsers',verifyToken, verifyAdmin, adminfunctions.searchUser)


module.exports = routes