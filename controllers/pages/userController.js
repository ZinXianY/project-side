const { User } = require('../../models')
const userServices = require('../../services/user-services')

const userController = {
  signUpPage: (req, res) => {
    res.render('signup')
  },
  //user signup
  signUp: (req, res, next) => {
    userServices.signUp(req, (err) => {
      if (err) return next(err)
      req.flash('success_messages', '註冊成功!')
      return res.redirect('/signin')
    })
  },
  signInPage: (req, res) => {
    res.render('signin')
  },
  //user signin
  signIn: (req, res) => {
    req.flash('success_messages', '登入成功!')
    res.redirect('/characters')
  },
  //user logout
  logout: (req, res) => {
    req.flash('success_messages', '登出成功!')
    req.logout(err => {
      if (err) { return next(err) }
    })
    res.redirect('/signin')
  },

  //user profile
  getUser: (req, res, next) => {
    userServices.getUser(req, (err, data) => err ? next(err) : res.render('profile', data))
  },
  //user edit profile
  editUser: (req, res, next) => {
    return User.findByPk(req.params.id)
      .then(user => {
        res.json(user.toJSON())
      })
      .catch(err => next(err))
  },
  putUser: (req, res, next) => {
    userServices.putUser(req, (err, data) => {
      if (err) return next(err)
      req.flash('success_messages', '個人資料更新成功!')
      req.session.updatedData = data
      return res.redirect('back')
    })
  },
  //user like character
  addLike: (req, res, next) => {
    userServices.addLike(req, (err, data) => {
      if (err) return next(err)
      req.flash('success_messages', '已加入收藏清單!')
      req.session.likedData = data
      return res.redirect('back')
    })
  },
  //user unlike character
  removeLike: (req, res, next) => {
    userServices.removeLike(req, (err, data) => {
      if (err) return next(err)
      req.flash('error_messages', '已移除收藏清單!')
      req.session.removedData = data
      return res.redirect('back')
    })
  },
  //user search character
  getSearch: (req, res, next) => {
    userServices.getSearch(req, (err, data) => err ? next(err) : res.render('search', data))
  }
}

module.exports = userController