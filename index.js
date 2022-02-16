// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// Controllers & Routes
app.use('/places', require('./controllers/places'))
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT)



// require('dotenv').config()
// const express = require ('express')

// const app = express()
// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())
// // importing router
// app.use('/places', require('./controllers/places'))

// app.get('/', (req,res)=>{
//     // res.send('Hello World')
//     res.render('home')
// })
// app.get('*', (req, res) => {
//     res.render('error404')
//   })
// //   GET/places
// // GET /places

// // creating 404 route
// app.get('*', (req, res) => {
//     res.status(404).send('<h1>404 Page</h1>')
// })

// app.listen(process.env.PORT)

