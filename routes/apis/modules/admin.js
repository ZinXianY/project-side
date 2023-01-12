const express = require('express')
const router = express.Router()

//controllers
const adminController = require('../../../controllers/apis/adminController')
//images
const upload = require('../../../middleware/multer')
const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'image', maxCount: 1 }])

//admin delete character route
router.delete('/characters/:id', adminController.deleteCharacter)
//admin characters page route
router.get('/characters', adminController.getCharacters)
//admin character page route
router.get('/characters/:id', adminController.getCharacter)
//admin create character route
router.post('/characters', cpUpload, adminController.postCharacter)

module.exports = router