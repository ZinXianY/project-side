const express = require('express')
const router = express.Router()

const adminController = require('../../controllers/adminController')
const categoryController = require('../../controllers/categoryController')

const upload = require('../../middleware/multer')
const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1}, { name: 'image', maxCount: 1 }])

router.get('/characters/create', adminController.createCharacter)
router.get('/api/characters/:id', adminController.editCharacter)
router.post('/api/characters/:id', cpUpload, adminController.putCharacter)
router.delete('/characters/:id', adminController.deleteCharacter)
router.get('/characters/:id', adminController.getCharacter)
router.get('/characters',  adminController.getCharacters)
router.post('/characters', cpUpload, adminController.postCharacter)

router.delete('/categories/:id', categoryController.deleteCategory)
router.get('/api/categories', categoryController.createCategory)
router.post('/api/categories', categoryController.postCategory)

router.use('/', (req, res) => res.redirect('/admin/characters'))

module.exports = router