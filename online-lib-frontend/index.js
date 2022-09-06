var express = require('express');


let app = express()
app.use(express.static(__dirname))

app.get('/login',(req,res) => {
    res.send('ok')

})


app.listen(3000,() => {console.log("server started")})