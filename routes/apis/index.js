const express = require('express')
const router = express.Router()

const characterController = require('../../controllers/apis/characterController')

//user characters page route
router.get('/characters', characterController.getCharacters)
//user character page route
router.get('/characters/:id', characterController.getCharacter)
//top characters route
router.get('/characters/top', characterController.getTopCharacters)

module.exports = router