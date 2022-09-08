const express = require('express')
const router = express.Router()

const adminController = require('../../controllers/adminController')

router.get('/characters', adminController.getCharacters)
router.use('/', (req, res) => res.redirect('/admin/characters'))

module.exports = router