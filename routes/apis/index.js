const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')

const admin = require('./modules/admin')
//controllers
const characterController = require('../../controllers/apis/characterController')
const userController = require('../../controllers/apis/userController')
//authenticated & authenticatedAdmin
const { authenticated, authenticatedAdmin } = require('../../middleware/api-auth')
//remind style
const { apiErrorHandler } = require('../../middleware/error-handler')
//image
const upload = require('../../middleware/multer')

//收到有關/admin的路徑一律給後臺專用modules處理
router.use('/admin', authenticated, authenticatedAdmin, admin)
//user characters page route
router.get('/characters', authenticated, characterController.getCharacters)
//user character page route
router.get('/characters/:id', authenticated, characterController.getCharacter)
//top characters route
router.get('/characters/top', authenticated, characterController.getTopCharacters)
//user profile route
router.get('/users/:id', authenticated, userController.getUser)
//user edit profile route
router.put('/users/:id', upload.single('avatar'), authenticated, userController.putUser)
//user search route
router.get('/search', authenticated, userController.getSearch)
//user like & unlike route
router.post('/like/:characterId', authenticated, userController.addLike)
router.delete('/like/:characterId', authenticated, userController.removeLike)
//user signin route
router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn)
//user signup route
router.post('/signup', userController.signUp)

router.use('/', apiErrorHandler)

module.exports = router