const { Category } = require('../../models')
const categoryServices = require('../../services/category-services')

const categoryController = {
  //admin add category
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
    categoryServices.postCategory(req, (err, data) => {
      if (err) return next(err)
      req.flash('success_messages', '新增成功!')
      req.session.createdData = data
      return res.redirect('back')
    })
  },
  //admin delete category
  deleteCategory: (req, res, next) => {
    categoryServices.deleteCategory(req, (err, data) => {
      if (err) return next(err)
      req.session.deletedData = data
      return res.redirect('/admin/characters')
    })
  }
}

module.exports = categoryController