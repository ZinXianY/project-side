const categoryServices = require('../../services/category-services')

const categoryController = {
  //admin post category
  postCategory: (req, res, next) => {
    categoryServices.postCategory(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  //admin delete category
  deleteCategory: (req, res, next) => {
    categoryServices.deleteCategory(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  }
}

module.exports = categoryController