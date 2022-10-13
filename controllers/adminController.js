const { Character } = require('../models')

const adminController = {
    getCharacters: (req, res, next) => {
        Character.findAll({
            raw: true
        })
        .then(characters => res.render('admin/characters', {characters}))
        .catch(err => next(err))
    },
    createCharacter: (req, res) => {
        res.render('admin/create')
    },
    postCharacter: (req, res, next) => {
        const { name, year, description } = req.body
        Character.create({
            name,
            year,
            description
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
    }
}

module.exports = adminController