const { Character } = require('../models')

const adminController = {
    getCharacters: (req, res, next) => {
        Character.findAll({
            raw: true
        })
        .then(characters => res.render('admin/characters', {characters}))
        .catch(err => next(err))
    }
}

module.exports = adminController