const express = require('express')
const router = express.Router()

const characterController = require('../controllers/characterController')
const admin = require('./modules/admin')

router.use('/admin', admin)//收到有關/admin的路徑一律給後臺專用modules處理
router.get('/characters', characterController.getCharacters)
router.use('/', (req, res) => res.redirect('/characters'))

module.exports = router