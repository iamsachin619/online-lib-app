var express = require('express')
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const session = require("express-session")
const bookroutes = require('./routes/book')
const userroutes =  require('./routes/user')
<<<<<<< HEAD
<<<<<<< HEAD
const rentRoute = require('./routes/rent')
=======
const rentroutes = require('./routes/rent')
>>>>>>> bdb525c1745ec75ccd69288fffe2aa64263f05cc
const staffroutes =  require('./routes/user')
=======
const staffroutes = require('./routes/staff')
>>>>>>> 32c1c292142ab69a0a2f5278e49e6b38b7d94b01
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
<<<<<<< HEAD
<<<<<<< HEAD
app.use('/rent', rentRoute)
=======
app.use('/rent', rentroutes)
>>>>>>> bdb525c1745ec75ccd69288fffe2aa64263f05cc
=======
>>>>>>> 32c1c292142ab69a0a2f5278e49e6b38b7d94b01
app.use('/staff',staffroutes)
app.use('/admin', adminroutes)

app.get("/",(req,res)=>{

    res.send("Logged in ")

})

app.listen(3000,() => {console.log("server started on port 3000")})