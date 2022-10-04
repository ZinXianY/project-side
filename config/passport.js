const passport = require('passport')
const LocalStrategy = require('passport-local')
const bcrypt = require('bcryptjs')
const db = require('../models')
const User = db.User

//設定 Passport strategy
passport.use(new LocalStrategy (
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    //使用者登入機制
    (req, email, password, cb) => {
        User.findOne({ where: {email} })
        .then(user => {
            if(!user) return cb(null, false, req.flash('error_messages', '帳號輸入錯誤!'))
            if(!bcrypt.compareSync(password, user.password)) return cb(null, false, req.flash('error_messages', '密碼輸入錯誤!'))
            return cb(null, user)
        })
    }
))

//序列化與反序列化
passport.serializeUser((user, cb) => {
    cb(null, user.id)
})
passport.deserializeUser((id, cb) => {
    User.findByPk(id).then(user => {
            user = user.toJSON()
            return cb(null, user)
        })
})

module.exports = passport