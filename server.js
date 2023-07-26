require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT ?? 6969
const handleVerifyJWT = require('./middlewares/handleVerifyJWT');


var bodyParser = require('body-parser');
const mongoose = require("mongoose")
const connectDB= require('./config/connectDb')

connectDB()




app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())

app.use('/',require("./routes/root"))

app.use('/register',require('./routes/register'));
app.use ('/login', require('./routes/login'));
app.use(handleVerifyJWT);
app.use ('/refresh', require('./routes/refreshToken'));
app.use('/logout', require('./routes/logout'))
app.use('/users', require('./routes/persons'))




mongoose.connection.once('open', ()=>{
  console.log('connect success');
  app.listen(PORT, () => {
    console.log(`app iss running  ${PORT}`)
  })
  
})



