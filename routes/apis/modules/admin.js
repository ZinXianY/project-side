const express = require('express')
const router = express.Router()

//controllers
const adminController = require('../../../controllers/apis/adminController')
const categoryController = require('../../../controllers/apis/categoryController')
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
//admin edit character route
router.put('/characters/:id', cpUpload, adminController.putCharacter)
//admin delete category route
router.delete('/categories/:id', categoryController.deleteCategory)
//admin create category route
router.post('/categories', categoryController.postCategory)

module.exports = router