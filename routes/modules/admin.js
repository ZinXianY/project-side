const express = require('express')
const router = express.Router()

const adminController = require('../../controllers/adminController')

router.get('/characters/create', adminController.createCharacter)
router.get('/api/characters/:id', adminController.editCharacter)
router.post('/api/characters/:id', adminController.putCharacter)
router.get('/characters/:id', adminController.getCharacter)
router.get('/characters',  adminController.getCharacters)
router.post('/characters', adminController.postCharacter)
router.use('/', (req, res) => res.redirect('/admin/characters'))

module.exports = router