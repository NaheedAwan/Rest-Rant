// Modules and Globals
require('dotenv').config()
const express = require('express')
const placesRoutes = require('./controllers/places')
const app = express()
const methodOverride = require('method-override')

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// importing routes
app.use('/places', placesRoutes)

app.get('/', (req, res) => {
    res.render('home')
})
// wildcard route
app.get('*', (req, res) => {
    res.render('error404')
})

const PORT = process.env.PORT 

app.listen(PORT, () => console.log(`listening on port ${PORT}`))






