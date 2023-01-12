const characterServices = require('../../services/character-services')

const characterController = {
  //user characters page
  getCharacters: (req, res, next) => {
    characterServices.getCharacters(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  //user character page
  getCharacter: (req, res, next) => {
    characterServices.getCharacter(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  //user top characters
  getTopCharacters: (req, res, next) => {
    characterServices.getTopCharacters(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  }
}

module.exports = characterController