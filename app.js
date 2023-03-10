if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const flash = require('connect-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const passport = require('./config/passport') //引入 Passport
const { getUser } = require('./helpers/auth-helpers')

const { pages, apis } = require('./routes')
const handlebarsHelpers = require('./helpers/handlebars-helpers')
const app = express()
const port = process.env.PORT

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs', helpers: handlebarsHelpers }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true}))
app.use(passport.initialize()) //初始化 Passport
app.use(passport.session()) //啟動 Session
app.use(flash())
app.use('/upload', express.static(path.join(__dirname, 'upload')))

app.use((req, res, next) => {
    res.locals.success_messages = req.flash('success_messages')
    res.locals.error_messages = req.flash('error_messages')
    res.locals.user = getUser(req)
    next()
})

app.use(methodOverride('_method'))

app.use('/api', apis)
app.use(pages)

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`)
})

module.exports = app