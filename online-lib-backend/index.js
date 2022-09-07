var express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const bookroutes = require('./routes/book');
const userroutes =  require('./routes/user')
<<<<<<< HEAD
const rentRoute = require('./routes/rent')
const staffroutes =  require('./routes/user')
=======
const adminroutes =  require('./routes/admin')
>>>>>>> 00af575dd47366d3ef0367ecab3a0c79d5522ab7


let app = express()
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(express.static(__dirname))
app.use('/book', bookroutes)
app.use('/user', userroutes)
<<<<<<< HEAD
app.use('/rent', rentRoute)
app.user('/staff',staffroutes)
=======
app.use('/admin', adminroutes)
>>>>>>> 00af575dd47366d3ef0367ecab3a0c79d5522ab7

app.get("/",(req,res)=>{

    res.send("Logged in ")

})

app.listen(3000,() => {console.log("server started on port 3000")})