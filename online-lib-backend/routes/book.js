const express  = require('express')
const routes = express.Router()
//const {addbooksctrl} = require('../controllers/books.js')
const booksctrls = require('../controllers/books.js')

routes.post('/addbooks', booksctrls.addbooksctrl )
routes.get('/listofbooks', booksctrls.listbooksctrl )
routes.get('/searchbooks', booksctrls.searchbooksctrl )
routes.post('/deletebooks', booksctrls.deletebooksctrl)
routes.post('/editbooks', booksctrls.editbookctrl)


module.exports = routes