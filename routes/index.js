const express = require('express')
const passport = require('../config/passport')
const router = express.Router()

const characterController = require('../controllers/characterController')
const userController = require('../controllers/userController')

const { authenticated, authenticatedAdmin } = require('../middleware/auth') //引入身分驗證
const { generalErrorHandler } = require('../middleware/error-handler')

const admin = require('./modules/admin')

router.use('/admin', authenticatedAdmin, admin)//收到有關/admin的路徑一律給後臺專用modules處理

router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)

router.get('/signin', userController.signInPage)
router.post('/signin', passport.authenticate('local', {failureRedirect: '/signin', failureFlash: true }), userController.signIn)

router.get('/logout', userController.logout)

router.get('/characters', authenticated, characterController.getCharacters)
router.use('/', (req, res) => res.redirect('/characters'))

router.use('/', generalErrorHandler)

module.exports = router