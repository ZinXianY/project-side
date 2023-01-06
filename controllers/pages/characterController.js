const { User, Character, Category } = require('../../models')
const { getOffset, getPagination } = require('../../helpers/pagination-helper')

const characterController = {
    //user characters page
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
                offset,
                order: [['name', 'ASC']]
            }),
            Category.findAll({ raw: true })
        ])
            .then(([characters, categories]) => {
                const likedCharactersId = req.user && req.user.LikedCharacters.map(lc => lc.id)

                const data = characters.rows.map(r => ({
                    ...r,
                    isLiked: likedCharactersId.includes(r.id)
                }))
                return res.render('characters', {
                    characters: data,
                    categories,
                    categoryId,
                    pagination: getPagination(limit, page, characters.count)
                })
            })
    },
    //user character page
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
    },
    //user top characters
    getTopCharacters: (req, res, next) => {
        return Character.findAll({
            include: [
                { model: User, as: 'LikedUsers' }
            ]
        })
            .then(characters => {
                const likedCharactersId = req.user && req.user.LikedCharacters.map(lc => lc.id)

                const data = characters.map(c => ({
                    ...c.dataValues,
                    likedCount: c.dataValues.LikedUsers.length,
                    isLiked: likedCharactersId.includes(c.id)
                }))
                    .sort((a, b) => b.likedCount - a.likedCount)
                    .slice(0, 10)
                res.render('topCharacters', { characters: data })
            })
            .catch(err => next(err))
    }
}

module.exports = characterController