// Modules and Globals
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const placesRoutes = require('./controllers/places')
const methodOverride = require('method-override')

const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// for static file(like css, images)
app.use(express.static('public'))
app.use(express.json() )
// interperating form
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

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
})

const PORT = process.env.PORT 

app.listen(PORT, () => console.log(`listening on port ${PORT}`))






