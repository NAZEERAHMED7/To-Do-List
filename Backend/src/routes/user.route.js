const express = require ('express')
const { signup, login } = require('../controllers/auth.controllers')
// create router variable from express.Router()
const router= express.Router()

// signup and login controller 
router.post('/signup', signup)
router.post('/login', login)


module.exports= router