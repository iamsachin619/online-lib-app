const express  = require('express')
const routes = express.Router()
//const {addbooksctrl} = require('../controllers/books.js')
const booksctrls = require('../controllers/books.js')

routes.post('/addbooks', booksctrls.addbooksctrl )
routes.post('/listofbooks', booksctrls.listbooksctrl )
routes.post('/searchbooks', booksctrls.searchbooksctrl )


module.exports = routes