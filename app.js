const express = require('express')
const exphbs = require('express-handlebars')
const flash = require('connect-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const routes = require('./routes')
const app = express()
const port = process.env.PORT || 3000
const SESSION_SECRET = 'secret'

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true}))
app.use(session({ secret: SESSION_SECRET, resave: false, saveUninitialized: false}))
app.use(flash())
app.use(methodOverride('_method'))

app.use((req, res, next) => {
    res.locals.success_messages = req.flash('success_messages')
    res.locals.error_messages = req.flash('error_messages')
    next()
})

app.use(routes)

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`)
})

module.exports = app