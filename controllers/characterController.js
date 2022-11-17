const { Character, Category } = require('../models')

const characterController = {
    getCharacters: (req, res) => {
        const categoryId = Number(req.query.categoryId) || ''
        const where = {}
        if (categoryId) where.categoryId = categoryId
        Promise.all([
            Character.findAll({
                raw: true,
                nest: true,
                include: [Category],
                where: where
            }),
            Category.findAll({ raw: true })
        ])
        .then(([characters, categories]) => {
            const data = characters.map(r => ({
                ...r
            }))
            return res.render('characters', {
                characters: data,
                categories,
                categoryId
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