const { Character, Category } = require('../models')

const characterController = {
    getCharacters: (req, res) => {
        Character.findAll({
            raw: true,
            nest: true,
            include: [Category]
        })
        .then(characters => {
            const data = characters.map(r => ({
                ...r
            }))
            return res.render('characters', {
                characters: data
            })
        })
    },
    getCharacter: (req, res, next) => {
        return Character.findByPk(req.params.id, {
            raw: true,
            nest: true,
            include: [Category]
        })
        .then(character => {
            res.render('character', { character })
        })
        .catch(err => next(err))
    }
}

module.exports = characterController