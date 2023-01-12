const { imgurFileHandler } = require('../../helpers/file-helpers')
const { Character, Category } = require('../../models')
const adminServices = require('../../services/admin-services')

const adminController = {
  //admin characters page
  getCharacters: (req, res, next) => {
    adminServices.getCharacters(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  //admin character page
  getCharacter: (req, res, next) => {
    adminServices.getCharacter(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  //admin post character
  postCharacter: async (req, res, next) => {
    try {
      const { name, year, avatarName, description, categoryId } = req.body
      if (!name) throw new Error('Character name is required!')
      const { files } = req
      await imgurFileHandler(files)
        .then(filePath => Character.create({
          name,
          year,
          avatarName,
          description,
          categoryId,
          avatar: filePath || null,
          image: filePath || null
        }))
        .then(newCharacter => {
          res.json({ status: 'success', character: newCharacter })
        })
    } catch (err) {
      return next(err)
    }
  },
  //admin delete character
  deleteCharacter: (req, res, next) => {
    adminServices.deleteCharacter(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  }
}

module.exports = adminController