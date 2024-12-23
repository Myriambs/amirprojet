const express = require('express')
const {createUser, registerUser, loginUser, myAccount,allUser} = require ('../controllers/userControllers')
const { registerValidation, validation, loginValidation } = require('../middleware/registerValidation')
const { isUser } = require('../middleware/isUser')
const userRoute = express.Router()


//http://localhost:5000/user
userRoute.post('/add',createUser)


//http://localhost:5000/user
userRoute.post('/register', registerValidation, validation, registerUser)


//http://localhost:5000/user
userRoute.post('/login', loginValidation, validation, loginUser)


//http://localhost:5000/user
 userRoute.get('/myaccount', isUser, async (req, res) => {
    try {
        res.status(200).send(req.user);
    } catch (err) {
        res.status(500).send(err);
    }
});


//http://localhost:5000/user/all

userRoute.get('/all',allUser)








module.exports = userRoute