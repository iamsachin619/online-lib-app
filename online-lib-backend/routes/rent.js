const express  = require('express')
const routes = express.Router()
//const {userregisterctrl} = require('../controllers/users.js')
//const {userloginctrl} = require('../controllers/users.js')
// const userfunctio = require('../controllers/users')
const {bookrentalcreatecltr, bookrentalapprovalctrl} = require('../controllers/rent')
routes.post('/createRental', bookrentalcreatecltr)
routes.post('/approveRental', bookrentalapprovalctrl)

module.exports = routes

