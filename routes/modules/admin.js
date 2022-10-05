const express = require('express')
const router = express.Router()

const adminController = require('../../controllers/adminController')
const { authenticatedAdmin } = require('../../middleware/auth') //引入身分驗證

router.get('/characters', authenticatedAdmin, adminController.getCharacters)
router.use('/', (req, res) => res.redirect('/admin/characters'))

module.exports = router