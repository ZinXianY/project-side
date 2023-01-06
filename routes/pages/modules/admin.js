const express = require('express')
const router = express.Router()
//controllers
const adminController = require('../../../controllers/pages/adminController')
const categoryController = require('../../../controllers/pages/categoryController')
//images
const upload = require('../../../middleware/multer')
const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1}, { name: 'image', maxCount: 1 }])

//admin create character route
router.get('/characters/create', adminController.createCharacter)
router.post('/characters', cpUpload, adminController.postCharacter)
//admin edit character route
router.get('/api/characters/:id', adminController.editCharacter)
router.post('/api/characters/:id', cpUpload, adminController.putCharacter)
//admin delete character route
router.delete('/characters/:id', adminController.deleteCharacter)
//admin character page route
router.get('/characters/:id', adminController.getCharacter)
//admin characters page route
router.get('/characters',  adminController.getCharacters)

//admin delete category route
router.delete('/categories/:id', categoryController.deleteCategory)
//admin create category route
router.get('/api/categories', categoryController.createCategory)
router.post('/api/categories', categoryController.postCategory)

router.use('/', (req, res) => res.redirect('/admin/characters'))

module.exports = router