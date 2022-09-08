const express = require('express')
const router = express.Router()

const characterController = require('../controllers/characterController')

router.get('/characters', characterController.getCharacters)
router.use('/', (req, res) => res.redirect('/characters'))

module.exports = router