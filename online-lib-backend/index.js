var express = require('express')
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const session = require("express-session")
const bookroutes = require('./routes/book')
const userroutes =  require('./routes/user')
<<<<<<< HEAD
const rentroutes = require('./routes/rent')
=======
const rentRoute = require('./routes/rent')
>>>>>>> 25b6fed (rent process)
const staffroutes =  require('./routes/user')
const adminroutes =  require('./routes/admin')


let app = express()
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(express.static(__dirname))
app.use('/book', bookroutes)
app.use('/user', userroutes)
<<<<<<< HEAD
app.use('/rent', rentroutes)
app.use('/staff',staffroutes)
=======
app.use('/rent', rentRoute)
app.user('/staff',staffroutes)
>>>>>>> 25b6fed (rent process)
app.use('/admin', adminroutes)

app.get("/",(req,res)=>{

    res.send("Logged in ")

})

app.listen(3000,() => {console.log("server started on port 3000")})