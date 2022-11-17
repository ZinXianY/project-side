const { Character, Category } = require('../models')
const { getOffset, getPagination } = require('../helpers/pagination-helper')

const characterController = {
    getCharacters: (req, res) => {
        const DEFAULT_LIMIT = 8
        const categoryId = Number(req.query.categoryId) || ''
        //Pagination
        const page = Number(req.query.page) || 1
        const limit = Number(req.query.limit) || DEFAULT_LIMIT
        const offset = getOffset(limit, page)

        const where = {}
        if (categoryId) where.categoryId = categoryId

        Promise.all([
            Character.findAndCountAll({
                raw: true,
                nest: true,
                include: [Category],
                where: where,
                limit,
                offset
            }),
            Category.findAll({ raw: true })
        ])
            .then(([characters, categories]) => {
                const data = characters.rows.map(r => ({
                    ...r
                }))
                return res.render('characters', {
                    characters: data,
                    categories,
                    categoryId,
                    pagination: getPagination(limit, page, characters.count)
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