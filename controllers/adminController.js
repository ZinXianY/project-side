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
    postCharacter: (req, res, next) => {
        const { name, year, avatarName, description } = req.body
        const file = req.file
        localFileHandler(file)
            .then(filePath => Character.create({
                name,
                year,
                avatarName,
                description,
                image: filePath || null
            }))
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
    putCharacter: (req, res, next) => {
        const { name, year, avatarName, description } = req.body
        const file = req.file
        Promise.all([
            Character.findByPk(req.params.id),
            localFileHandler(file)
        ])
            .then(([character, filePath]) => {
                return character.update({
                    name,
                    year,
                    avatarName,
                    description,
                    image: filePath || character.image
                })
                    .then(() => {
                        req.flash('success_messages', '角色資料更新成功!')
                        res.redirect('back')
                    })
                    .catch(err => next(err))
            })
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