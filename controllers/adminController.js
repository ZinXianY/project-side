const { Character } = require('../models')
const { localFileHandler } = require('../helpers/file-helpers')

const adminController = {
    getCharacters: (req, res, next) => {
        Character.findAll({
            raw: true
        })
            .then(characters => res.render('admin/characters', { characters }))
            .catch(err => next(err))
    },
    createCharacter: (req, res) => {
        res.render('admin/create')
    },
    postCharacter: async (req, res, next) => {
        const { name, year, avatarName, description } = req.body
        const { files } = req
        console.log(req.files)
        let avatarLink
        let imageLink

        if (files.avatar) {
            avatarLink = await localFileHandler(files.avatar[0])
        }
        if (files.image) {
            imageLink = await localFileHandler(files.image[0])
        }

        return Character.create({
            name,
            year,
            avatarName,
            description,
            image: files.image ? imageLink: null,
            avatar: files.avatar ? avatarLink: null
        })
            .then(() => {
                req.flash('success_messages', '新增成功!')
                res.redirect('/admin/characters')
            })
            .catch(err => next(err))
    },
    getCharacter: (req, res, next) => {
        Character.findByPk(req.params.id, {
            raw: true
        })
            .then(character => {
                res.render('admin/character', { character })
            })
            .catch(err => next(err))
    },
    editCharacter: (req, res, next) => {
        Character.findByPk(req.params.id)
            .then(character => {
                const { name, year, avatarName, description } = character.toJSON()
                res.json({
                    name,
                    year,
                    avatarName,
                    description
                })
                    .catch(err => next(err))
            })
    },
    putCharacter: async (req, res, next) => {
        const { name, year, avatarName, description } = req.body
        const { files } = req
        console.log(req.files)
        let avatarLink
        let imageLink

        if (files.avatar) {
            avatarLink = await localFileHandler(files.avatar[0])
        }
        if (files.image) {
            imageLink = await localFileHandler(files.image[0])
        }

        Character.findByPk(req.params.id)
            .then(character => {
                character.update({
                    name,
                    year,
                    avatarName,
                    description,
                    avatar: files.avatar ? avatarLink : character.avatar,
                    image: files.image ? imageLink : character.image
                })
            })
            .then(() => {
                req.flash('success_messages', '角色資料更新成功!')
                res.redirect('back')
            })
            .catch(err => next(err))
    },
    deleteCharacter: (req, res, next) => {
        return Character.findByPk(req.params.id)
            .then(character => {
                return character.destroy()
            })
            .then(() => res.redirect('/admin/characters'))
            .catch(err => next(err))
    }
}

module.exports = adminController