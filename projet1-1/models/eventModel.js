const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    eventName: {
        type: String,
        required: true },
    
    edition: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String
    },

    location: {
        type: String,
        require: true
    },

    date: {
        type: String,
        required: true
    },

    lineup: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    }

}) 

module.exports = mongoose.model('event', eventSchema)