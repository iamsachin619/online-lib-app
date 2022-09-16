var express = require('express')
const bookroutes = require('./routes/book')
const userroutes =  require('./routes/user')
const staffroutes = require('./routes/staff')
const adminroutes =  require('./routes/admin')
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express()
app.use(cors({origin: 'http://localhost:3000',credentials: true}))
app.use(cookieParser())
app.use(express.json());
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}));
app.get('/cookieTest', (req,res)=>{
    res.cookie('user','sachin' ).send('true')
    
})

app.get('/signOut', (req,res)=>{
    res.clearCookie('access_token')
    res.send('signed Out').status(200)
})

app.use('/book', bookroutes)    
app.use('/user', userroutes)
app.use('/staff',staffroutes)
app.use('/admin', adminroutes)


app.listen(8000,() => {console.log("server started on port 8000")})