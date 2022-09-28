const bcrypt = require('bcryptjs')
const db = require('../models')
const User = db.User

const userController = {
    signUpPage: (req, res) => {
        res.render('signup')
    },
    signUp: (req, res) => {
      const { name, email, password } = req.body
      const errors = []
      User.findOne({ where: { email } })
      .then(user => {
        if (user) {
          errors.push({ message: '信箱已重複註冊!' })
          res.render('signup', { errors, name, email, password })
        } else {
          req.flash('success_messages', '註冊成功!')
          return User.create({
            name,
            email,
            password: bcrypt.hashSync(password, 10)
          })
          .then((user) => res.redirect('/signin'))
        }
      })
  },
  signInPage: (req, res) => {
    res.render('signin')
  },
  signIn: (req, res) => {
    req.flash('success_messages', '登入成功!')
    res.redirect('/characters')
  },
  logout: (req, res) => {
    req.flash('success_messages', '登出成功!')
    req.logout()
    res.redirect('/signin')
  }
}

module.exports = userController