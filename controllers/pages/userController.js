const bcrypt = require('bcryptjs')
const { imgurFileHandler } = require('../../helpers/file-helpers')
const { User, Character, Like, Category } = require('../../models')

const userController = {
  signUpPage: (req, res) => {
    res.render('signup')
  },
  //user signup
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
  getUser: (req, res) => {
    return User.findByPk(req.params.id, {
      include: [
        { model: Character, as: 'LikedCharacters', include: [Category] }
      ]
    })
      .then(user => {
        user = user.toJSON()
        const likedCharactersId = req.user && req.user.LikedCharacters.map(lc => lc.id)
        user.LikedCharacters = user.LikedCharacters.map(r => ({
          ...r,
          isLiked: likedCharactersId.includes(r.id)
        }))
        return res.render('profile', { user })
      })
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
    const { name } = req.body
    const { file } = req
    Promise.all([
      User.findByPk(req.params.id),
      imgurFileHandler(file)
    ])
      .then(([user, filePath]) => {
        return user.update({
          name,
          avatar: filePath || user.avatar
        })
      })
      .then(() => {
        req.flash('success_messages', '個人資料更新成功!')
        res.redirect('back')
      })
      .catch(err => next(err))
  },
  //user like character
  addLike: (req, res, next) => {
    const { characterId } = req.params
    Promise.all([
      Character.findByPk(characterId),
      Like.findOne({
        where: {
          userId: req.user.id,
          characterId
        }
      })
    ])
      .then(like => {
        return Like.create({
          userId: req.user.id,
          characterId
        })
      })
      .then(() => {
        req.flash('success_messages', '已加入收藏清單!')
        res.redirect('back')
      })
      .catch(err => next(err))
  },
  //user unlike character
  removeLike: (req, res, next) => {
    const { characterId } = req.params
    return Like.findOne({
      where: {
        userId: req.user.id,
        characterId
      }
    })
      .then(like => {
        return like.destroy()
      })
      .then(() => {
        req.flash('error_messages', '已移除收藏清單!')
        res.redirect('back')
      })
      .catch(err => next(err))
  },
  //user search character
  getSearch: (req, res, next) => {
    const keyword = req.query.keyword

    Promise.all([
      Character.findAll({
        raw: true,
        nest: true,
        include: [Category]
      }),
      Category.findAll({ raw: true })
    ])
      .then(([characters, categories]) => {
        const likedCharactersId = req.user && req.user.LikedCharacters.map(lc => lc.id)

        const data = characters.map(c => ({
          ...c,
          isLiked: likedCharactersId.includes(c.id)
        }))

        const search = data.filter(d => {
          if (!keyword.length) throw new Error('請輸入機體名稱!')
          return d.name.toLowerCase().includes(keyword.toLowerCase())
        })
        return res.render('search', {
          characters: search,
          categories,
          keyword
        })
      })
      .catch(err => next(err))
  }
}

module.exports = userController