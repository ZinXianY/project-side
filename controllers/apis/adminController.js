const { imgurFileHandler } = require('../../helpers/file-helpers')
const { Character } = require('../../models')
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
      if (!description) throw new Error('Character description is required!')
      const { files } = req
      let avatarLink
      let imageLink

      if (files.avatar) {
        avatarLink = await imgurFileHandler(files.avatar[0])
      }
      if (files.image) {
        imageLink = await imgurFileHandler(files.image[0])
      }

      return Character.create({
        name,
        year,
        avatarName,
        description,
        image: files.image ? imageLink : null,
        avatar: files.avatar ? avatarLink : null,
        categoryId
      })
        .then(newCharacter => {
          res.json({ status: 'success', character: newCharacter })
        })
    } catch (err) {
      return next(err)
    }
  },
  //admin put character
  putCharacter: (req, res, next) => {
    adminServices.putCharacter(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  //admin delete character
  deleteCharacter: (req, res, next) => {
    adminServices.deleteCharacter(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  }
}

module.exports = adminController