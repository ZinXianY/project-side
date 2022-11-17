const { Category } = require('../models')

const categoryController = {
  createCategory: (req, res, next) => {
    Category.findAll({
      raw: true
    })
      .then(categories => {
        const { name } = categories.toJSON()
        res.json({ name })
      })
      .catch(err => next(err))
  },
  postCategory: (req, res, next) => {
    const { name } = req.body
    return Category.create({ name })
      .then(() => {
        req.flash('success_messages', '新增成功!')
        res.redirect('back')
      })
      .catch(err => next(err))
  },
  deleteCategory: (req, res, next) => {
    return Category.findByPk(req.params.id)
      .then(category => {
        return category.destroy()
      })
      .then(() => res.redirect('/admin/characters'))
      .catch(err => next(err))
  }
}

module.exports = categoryController