const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')

const admin = require('./modules/admin')

const characterController = require('../../controllers/apis/characterController')
const userController = require('../../controllers/apis/userController')

const { authenticated, authenticatedAdmin } = require('../../middleware/api-auth')
const { apiErrorHandler } = require('../../middleware/error-handler')

//收到有關/admin的路徑一律給後臺專用modules處理
router.use('/admin', authenticated, authenticatedAdmin, admin)
//user characters page route
router.get('/characters', authenticated, characterController.getCharacters)
//user character page route
router.get('/characters/:id', authenticated, characterController.getCharacter)
//top characters route
router.get('/characters/top', authenticated, characterController.getTopCharacters)
//user signin route
router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn)

router.use('/', apiErrorHandler)

module.exports = router