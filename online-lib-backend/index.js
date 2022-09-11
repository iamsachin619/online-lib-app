var express = require('express')
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const session = require("express-session")
const bookroutes = require('./routes/book')
const userroutes =  require('./routes/user')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const rentroutes = require('./routes/rent')
const rentRoute = require('./routes/rent')
const staffroutes =  require('./routes/user')
=======
const staffroutes = require('./routes/staff')
>>>>>>> 2110d88 (backend middleware and routes restructure)
=======
=======
>>>>>>> 20e09fbd92d54f4edc93d221209dca2cf0d12f18


const rentroutes = require('./routes/rent')
const staffroutes =  require('./routes/user')

<<<<<<< HEAD
>>>>>>> 680bdb3 (Arun)
=======
>>>>>>> 20e09fbd92d54f4edc93d221209dca2cf0d12f18
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
<<<<<<< HEAD

app.use('/rent', rentroutes)
=======
>>>>>>> 2110d88 (backend middleware and routes restructure)
=======
=======
>>>>>>> 20e09fbd92d54f4edc93d221209dca2cf0d12f18

app.use('/rent', rentRoute)

app.use('/rent', rentroutes)

<<<<<<< HEAD
>>>>>>> 680bdb3 (Arun)
app.use('/staff',staffroutes)

app.use('/rent', rentRoute)

app.user('/staff',staffroutes)

=======
>>>>>>> 20e09fbd92d54f4edc93d221209dca2cf0d12f18
app.use('/staff',staffroutes)

app.use('/admin', adminroutes)

app.get("/",(req,res)=>{

    res.send("Logged in ")

})

app.listen(3000,() => {console.log("server started on port 3000")})