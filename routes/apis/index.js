const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')

const characterController = require('../../controllers/apis/characterController')
const userController = require('../../controllers/apis/userController')

//user signin route
router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn)
//user characters page route
router.get('/characters', characterController.getCharacters)
//user character page route
router.get('/characters/:id', characterController.getCharacter)
//top characters route
router.get('/characters/top', characterController.getTopCharacters)

module.exports = router