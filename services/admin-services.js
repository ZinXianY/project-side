const { Character, Category } = require('../models')
const { getOffset, getPagination } = require('../helpers/pagination-helper')

const adminServices = {
  //admin characters page
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
        order: [['categoryId', 'ASC']]
      }),
      Category.findAll({ raw: true })
    ])
      .then(([characters, categories]) => {
        const data = characters.rows.map(r => ({
          ...r,
          description: r.description.substring(0, 50)
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
  //admin character page
  getCharacter: (req, cb) => {
    Character.findByPk(req.params.id, {
      raw: true,
      nest: true,
      include: [Category]
    })
      .then(character => {
        return cb(null, { character })
      })
      .catch(err => cb(err))
  },
  //admin delete character
  deleteCharacter: (req, cb) => {
    return Character.findByPk(req.params.id)
      .then(character => {
        if (!character) {
          const err = new Error("character didn't exist!")
          err.status = 404
          throw err
        }
        return character.destroy()
      })
      .then(deletedCharacter => cb(null, { character: deletedCharacter }))
      .catch(err => cb(err))
  }
}

module.exports = adminServices