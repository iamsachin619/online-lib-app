var express = require('express')
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const session = require("express-session")
const bookroutes = require('./routes/book')
const userroutes =  require('./routes/user')
<<<<<<< HEAD
const rentRoute = require('./routes/rent')
=======
const rentroutes = require('./routes/rent')
>>>>>>> bdb525c1745ec75ccd69288fffe2aa64263f05cc
const staffroutes =  require('./routes/user')
const adminroutes =  require('./routes/admin')


let app = express()
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(express.static(__dirname))
app.use('/book', bookroutes)
app.use('/user', userroutes)
<<<<<<< HEAD
app.use('/rent', rentRoute)
=======
app.use('/rent', rentroutes)
>>>>>>> bdb525c1745ec75ccd69288fffe2aa64263f05cc
app.use('/staff',staffroutes)
app.use('/admin', adminroutes)

app.get("/",(req,res)=>{

    res.send("Logged in ")

})

app.listen(3000,() => {console.log("server started on port 3000")})