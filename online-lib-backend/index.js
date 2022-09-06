var express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const bookroutes = require('./routes/book');
const userroutes =  require('./routes/user')
const adminroutes =  require('./routes/admin')


let app = express()
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(express.static(__dirname))
app.use('/book', bookroutes)
app.use('/user', userroutes)
app.use('/staff', adminroutes)

app.get("/",(req,res)=>{

    res.send("Logged in ")

})

app.listen(3000,() => {console.log("server started on port 3000")})