const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')
const routes = require('./routes')
const app = express()
const port = process.env.PORT || 3000

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'))
app.use(routes)

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`)
})

module.exports = app