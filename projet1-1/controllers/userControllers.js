const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// Create User
exports.createUser = async (req, res)=>{
    try{
        const newUser = await User.create(req.body)
        res.status(200).json({msg:'User created',newUser})

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// Register Part
exports.registerUser = async (req, res) => {
    try{
        const { firstName, lastName, age, email, password } = req.body
        const foundUser = await User.findOne({email})
        if (foundUser) { return res.status(404).json({ msg: 'Email already used'}) }
        const NewUser = await new User(req.body)
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds)
        const hash = bcrypt.hashSync(password, salt)
        NewUser.password = hash
        NewUser.save()
        res.status(200).json({msg: 'Welcome to Loconada', NewUser})


    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// Login Part
exports.loginUser = async (req, res) => {
    try{
    const {email, password} = req.body
    const foundUser = await User.findOne({email})
    if(!foundUser) { return res.status(404).json({msg: 'Account not found ! Go to register'})}
    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) {
        return res.status(404).json({ msg: "Wrong account" });
    }
    const payload = { id: foundUser._id }
    const token = jwt.sign(payload, process.env.privateKey)
    res.status(200).json({msg: 'Welcome', token, foundUser})
    } catch (err) {
        res.status(500).json({msg: 'Something went wrong, please try again'})
    }
}

//Get To My Account
exports.myAccount = async (req, res) => {
    try{
        res.send(req.user)
    } catch (err) {
        res.send(err)
    }
}


exports.allUser=async(req,res)=>{
    try{
const alluser = await User.find()
res.json({msg:"voici all",alluser})
    }catch(err){
        console.log(err)
    }
}