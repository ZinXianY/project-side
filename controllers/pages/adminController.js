const { Character, Category } = require('../../models')
const { imgurFileHandler } = require('../../helpers/file-helpers')
const adminServices = require('../../services/admin-services')

const adminController = {
    //admin characters page
    getCharacters: (req, res, next) => {
        adminServices.getCharacters(req, (err, data) => err ? next(err) : res.render('admin/characters', data))
    },
    //admin add character
    createCharacter: (req, res, next) => {
        return Category.findAll({
            raw: true
        })
            .then(categories => res.render('admin/create', { categories }))
            .catch(err => next(err))
    },
    postCharacter: async (req, res, next) => {
        const { name, year, avatarName, description, categoryId } = req.body
        const { files } = req
        let avatarLink
        let imageLink

        if (files.avatar) {
            avatarLink = await imgurFileHandler(files.avatar[0])
        }
        if (files.image) {
            imageLink = await imgurFileHandler(files.image[0])
        }

        return Character.create({
            name,
            year,
            avatarName,
            description,
            image: files.image ? imageLink : null,
            avatar: files.avatar ? avatarLink : null,
            categoryId
        })
            .then(() => {
                req.flash('success_messages', '新增成功!')
                res.redirect('/admin/characters')
            })
            .catch(err => next(err))
    },
    //admin character page
    getCharacter: (req, res, next) => {
        adminServices.getCharacter(req, (err, data) => err ? next(err) : res.render('admin/character', data))
    },
    //admin edit character
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
        adminServices.putCharacter(req, (err, data) => {
            if (err) return next(err)
            req.flash('success_messages', '角色資料更新成功!')
            req.session.updatedData = data
            return res.redirect('back')
        })
    },
    //admin delete character
    deleteCharacter: (req, res, next) => {
        adminServices.deleteCharacter(req, (err, data) => {
            if (err) return next(err)
            req.session.deletedData = data
            return res.redirect('/admin/characters')
        })
    }
}

module.exports = adminController