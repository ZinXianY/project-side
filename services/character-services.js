const { User, Character, Category } = require('../models')
const { getOffset, getPagination } = require('../helpers/pagination-helper')

const characterServices = {
  //user characters page
  getCharacters: (req, cb) => {
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
        const likedCharactersId = req.user?.LikedCharacters ? req.user.LikedCharacters.map(lc => lc.id) : []

        const data = characters.rows.map(r => ({
          ...r,
          isLiked: likedCharactersId.includes(r.id)
        }))
        return cb(null, {
          characters: data,
          categories,
          categoryId,
          pagination: getPagination(limit, page, characters.count)
        })
      })
      .catch(err => cb(err))
  },
  //user character page
  getCharacter: (req, cb) => {
    return Character.findByPk(req.params.id, {
      raw: true,
      nest: true,
      include: [Category]
    })
      .then(character => {
       return cb(null, { character })
      })
      .catch(err => cb(err))
  },
  //user top characters
  getTopCharacters: (req, cb) => {
    return Character.findAll({
      include: [
        { model: User, as: 'LikedUsers' }
      ]
    })
      .then(characters => {
        const likedCharactersId = req.user?.LikedCharacters ? req.user.LikedCharacters.map(lc => lc.id) : []

        const data = characters.map(c => ({
          ...c.dataValues,
          likedCount: c.dataValues.LikedUsers.length,
          isLiked: likedCharactersId.includes(c.id)
        }))
          .sort((a, b) => b.likedCount - a.likedCount)
          .slice(0, 10)
        return cb(null, { characters: data })
      })
      .catch(err => cb(err))
  }
}

module.exports = characterServices