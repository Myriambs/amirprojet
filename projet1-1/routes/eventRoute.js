const express = require('express')
const { addEvent, getEvent, UpdateEvent, deleteEvent } = require('../controllers/eventControllers')
const eventRoute = express.Router()


//http://localhost:5000/event
eventRoute.post('/', addEvent)


//http://localhost:5000/event
eventRoute.get('/', getEvent)


//http://localhost:5000/event
eventRoute.put('/:id', UpdateEvent)


//http://localhost:5000/event
eventRoute.delete('/:id', deleteEvent)



module.exports = eventRoute