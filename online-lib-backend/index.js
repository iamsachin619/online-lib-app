var express = require('express')
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const session = require("express-session")
const bookroutes = require('./routes/book')
const userroutes =  require('./routes/user')


const rentroutes = require('./routes/rent')
const staffroutes =  require('./routes/user')

const adminroutes =  require('./routes/admin')
const dotenv = require('dotenv').config()
var cookieParser = require('cookie-parser')

let app = express()
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(express.static(__dirname))
app.use('/book', bookroutes)
app.use('/user', userroutes)

app.use('/rent', rentRoute)

app.use('/rent', rentroutes)

app.use('/staff',staffroutes)
app.use('/admin', adminroutes)

app.get("/",(req,res)=>{

    res.send("Logged in ")

})

app.listen(3000,() => {console.log("server started on port 3000")})