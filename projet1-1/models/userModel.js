const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum:['Admin', 'User'],
        default:'User'
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)