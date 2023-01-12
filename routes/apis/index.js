const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')

const admin = require('./modules/admin')
const characterController = require('../../controllers/apis/characterController')
const userController = require('../../controllers/apis/userController')

//user signin route
router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn)
const { apiErrorHandler } = require('../../middleware/error-handler')

//收到有關/admin的路徑一律給後臺專用modules處理
router.use('/admin', admin)
//user characters page route
router.get('/characters', characterController.getCharacters)
//user character page route
router.get('/characters/:id', characterController.getCharacter)
//top characters route
router.get('/characters/top', characterController.getTopCharacters)

router.use('/', apiErrorHandler)

module.exports = router