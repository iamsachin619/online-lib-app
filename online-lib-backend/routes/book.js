const express  = require('express')
const routes = express.Router()
const {addbooksctrl} = require('../controllers/books.js')

routes.post('/addbooks', addbooksctrl )
routes.post('/deatailsbooks', addbooksctrl )
routes.post('/deletbooks', addbooksctrl )


module.exports = routes