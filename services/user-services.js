const bcrypt = require('bcryptjs')
const { imgurFileHandler } = require('../helpers/file-helpers')
const { User, Character, Like, Category } = require('../models')

const userServices = {
  //user signup
  signUp: (req, cb) => {
    const { name, email, password } = req.body
    User.findOne({ where: { email } })
      .then(user => {
        if (user) throw new Error('信箱已重複註冊!')
        return bcrypt.hash(password, 10)
      })
      .then(hash => User.create({
        name,
        email,
        password: hash
      }))
      .then(newSignup => cb(null, { user: newSignup }))
      .catch(err => cb(err))
  },
  //user profile
  getUser: (req, cb) => {
    return User.findByPk(req.params.id, {
      include: [
        { model: Character, as: 'LikedCharacters', include: [Category] }
      ]
    })
      .then(user => {
        user = user.toJSON()
        const likedCharactersId = req.user?.LikedCharacters ? req.user.LikedCharacters.map(lc => lc.id) : []
        user.LikedCharacters = user.LikedCharacters.map(r => ({
          ...r,
          isLiked: likedCharactersId.includes(r.id)
        }))
        return cb(null, { user })
      })
      .catch(err => cb(err))
  },
  //user put profile
  putUser: (req, cb) => {
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
      .then(updatedUser => cb(null, { user: updatedUser }))
      .catch(err => cb(err))
  },
  //user like character
  addLike: (req, cb) => {
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
      .then(likedCharacter => cb(null, { like: likedCharacter }))
      .catch(err => cb(err))
  },
  //user unlike character
  removeLike: (req, cb) => {
    const { characterId } = req.params
    return Like.findOne({
      where: {
        userId: req.user.id,
        characterId
      }
    })
      .then(like => {
        if (!like) {
          const err = new Error("like is remove!")
          err.status = 404
          throw err
        }
        return like.destroy()
      })
      .then(removedLike => cb(null, { like: removedLike }))
      .catch(err => cb(err))
  },
  //user search character
  getSearch: (req, cb) => {
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
          const likedCharactersId = req.user?.LikedCharacters ? req.user.LikedCharacters.map(lc => lc.id) : []

          const data = characters.map(c => ({
            ...c,
            isLiked: likedCharactersId.includes(c.id)
          }))

          const search = data.filter(d => {
            if (!keyword) throw new Error('請輸入機體名稱!')
            return d.name.toLowerCase().includes(keyword.toLowerCase())
          })
          return cb(null, {
            characters: search,
            categories,
            keyword
          })
        })
        .catch(err => cb(err))
    } 
}

module.exports = userServices