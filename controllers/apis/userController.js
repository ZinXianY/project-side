const jwt = require('jsonwebtoken')
const userServices = require('../../services/user-services')

const userController = {
  //user signin
  signIn: (req, res, next) => {
    try {
      const userData = req.user.toJSON()
      delete userData.password
      const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '30d' })
      res.json({
        status: 'success',
        data: {
          token,
          user: userData
        }
      })
    } catch (err) {
      next(err)
    }
  },
  //user signup
  signUp: (req, res, next) => {
    userServices.signUp(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  //user profile
  getUser: (req, res, next) => {
    userServices.getUser(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  //user put profile
  putUser: (req, res, next) => {
    userServices.putUser(req, (err, data) => err ? next(err) : res.json({ status : 'success', data }))
  },
  //user like character
  addLike: (req, res, next) => {
    userServices.addLike(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  //user unlike character
  removeLike: (req, res, next) => {
    userServices.removeLike(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  //user search character
  getSearch: (req, res, next) => {
    userServices.getSearch(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  }
}

module.exports = userController