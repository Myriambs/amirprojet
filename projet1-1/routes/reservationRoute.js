const express = require('express')
const { addReservation, getReservation } = require('../controllers/reservationControllers')
const reservationRoute = express.Router()


//http://localhost:5000/reservation
reservationRoute.post('/', addReservation)


//http://localhost:5000/reservation
 reservationRoute.get('/', getReservation)





module.exports = reservationRoute