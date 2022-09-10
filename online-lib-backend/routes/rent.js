const express  = require('express')
const routes = express.Router()
//const {userregisterctrl} = require('../controllers/users.js')
//const {userloginctrl} = require('../controllers/users.js')
const rentalfunction = require('../controllers/rent')
const { route } = require('./book')
//const {bookrentalcreatecltr, bookrentalapprovalctrl} = require('../controllers/rent')



routes.get('/createRental', rentalfunction.bookrentalcreatecltr)
routes.post('/approveRental', rentalfunction.bookrentalapprovalctrl)
routes.post('/usermybooks', rentalfunction.usermybooks)
routes.post('/usermyorders',rentalfunction.usermyOrders)

module.exports = routes

