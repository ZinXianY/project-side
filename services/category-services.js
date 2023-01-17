const { Category } = require('../models')

const categoryServices = {
  //admin post category
  postCategory: (req, cb) => {
    const { name } = req.body
    return Category.create({ name })
      .then(newCategory => cb(null, { category: newCategory }))
      .catch(err => cb(err))
  },
  //admin delete category
  deleteCategory: (req, cb) => {
    return Category.findByPk(req.params.id)
      .then(category => {
        if (!category) {
          const err = new Error("categroy didn't exist!")
          err.status = 404
          throw err
        }
        return category.destroy()
      })
      .then(deletedCategory => cb(null, { category: deletedCategory }))
      .catch(err => cb(err))
  }
}

module.exports = categoryServices