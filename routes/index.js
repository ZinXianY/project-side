const express = require('express')
const passport = require('../config/passport')
const router = express.Router()
//controllers
const characterController = require('../controllers/characterController')
const userController = require('../controllers/userController')
//authenticated & authenticatedAdmin
const { authenticated, authenticatedAdmin } = require('../middleware/auth')
//remind style
const { generalErrorHandler } = require('../middleware/error-handler')
//image
const upload = require('../middleware/multer')

const admin = require('./modules/admin')
const auth = require('./modules/auth')

//收到有關/admin的路徑一律給後臺專用modules處理
router.use('/admin', authenticatedAdmin, admin)
//user signup route
router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)
//user signin route
router.get('/signin', userController.signInPage)
router.post('/signin', passport.authenticate('local', {failureRedirect: '/signin', failureFlash: true }), userController.signIn)
//user logout route
router.get('/logout', userController.logout)
//top characters route
router.get('/characters/top', authenticated, characterController.getTopCharacters)
//user character page route
router.get('/characters/:id', authenticated, characterController.getCharacter)
//user characters page route
router.get('/characters', authenticated, characterController.getCharacters)
//user search route
router.get('/search', authenticated, userController.getSearch)
//user profile route
router.get('/users/:id', authenticated, userController.getUser)
//user edit profile route
router.get('/api/users/:id', authenticated, userController.editUser)
router.post('/api/users/:id', upload.single('avatar'), authenticated, userController.putUser)
//user like & unlike route
router.post('/like/:characterId', authenticated, userController.addLike)
router.delete('/like/:characterId', authenticated, userController.removeLike)

router.use('/auth', auth)

router.use('/', (req, res) => res.redirect('/characters'))

router.use('/', generalErrorHandler)

module.exports = router