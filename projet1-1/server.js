const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5001
const db = require('./config/db')
const eventRoute = require('./routes/eventRoute')
const userRoute = require('./routes/userRoute')
const cors = require('cors')
var bodyParser = require('body-parser')
const reservationRoute = require('./routes/reservationRoute')



db()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.use('/event', eventRoute)
app.use('/user', userRoute)
app.use('/reservation', reservationRoute)


app.listen(port, err=>{
    err ? console.log(err) : console.log( `Go to the port ${port}` )
})