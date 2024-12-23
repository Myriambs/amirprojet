const reservation = require('../models/reservationModel')

// Add Reservation
exports.addReservation = async(req, res) => {
    try{
        const newReservation = await reservation.create(req.body)
        res.status(200).json({msg: 'Reservation created', newReservation})
    } catch(err) {
        res.status(500).json({msg: 'Reservation failed'})
    }
}

// Get Reservation
exports.getReservation = async (req, res) => {
    try{
        const reservations = await reservation.find()
        res.status(200).json(reservations)

    } catch (err) {
        res.status(500).json({msg: 'Something went wrong, please try again'})
    }
}