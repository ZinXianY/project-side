const passport = require('passport')
const LocalStrategy = require('passport-local')
const bcrypt = require('bcryptjs')
const { User, Character } = require('../models')

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
    return User.findByPk(id, {
        include: [
            { model: Character, as: 'LikedCharacters'}
        ]
    })
    .then(user => cb(null, user.toJSON()))
    .catch(err => cb(err))
})

module.exports = passport