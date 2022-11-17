const { Character, Category } = require('../models')

const characterController = {
    getCharacters: (req, res, next) => {
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
    }
}

module.exports = characterController