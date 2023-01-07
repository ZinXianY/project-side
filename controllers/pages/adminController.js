const { Character, Category } = require('../../models')
const { imgurFileHandler } = require('../../helpers/file-helpers')
const { getOffset, getPagination } = require('../../helpers/pagination-helper')

const adminController = {
    //admin characters page
    getCharacters: (req, res, next) => {
        const DEFAULT_LIMIT = 8
        const categoryId = Number(req.query.categoryId) || ''
        //Pagination
        const page = Number(req.query.page) || 1
        const limit = Number(req.query.limit) || DEFAULT_LIMIT
        const offset = getOffset(limit, page)

        const where = {}
        if (categoryId) where.categoryId = categoryId

        Promise.all([
            Character.findAndCountAll({
                raw: true,
                nest: true,
                include: [Category],
                where: where,
                limit,
                offset,
                order: [['categoryId', 'ASC']]
            }),
            Category.findAll({ raw: true })
        ])
            .then(([characters, categories]) => {
                const data = characters.rows.map(r => ({
                    ...r,
                    description: r.description.substring(0, 50)
                }))
                return res.render('admin/characters', {
                    characters: data,
                    categories,
                    categoryId,
                    pagination: getPagination(limit, page, characters.count)
                })
            })
            .catch(err => next(err))
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
        console.log(req.files)
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
        Character.findByPk(req.params.id, {
            raw: true,
            nest: true,
            include: [Category]
        })
            .then(character => {
                res.render('admin/character', { character })
            })
            .catch(err => next(err))
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
        const { name, year, avatarName, description } = req.body
        const { files } = req
        console.log(req.files)
        let avatarLink
        let imageLink

        if (files.avatar) {
            avatarLink = await imgurFileHandler(files.avatar[0])
        }
        if (files.image) {
            imageLink = await imgurFileHandler(files.image[0])
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
    //admin delete character
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