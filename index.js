
const express = require ('express')
require('dotenv').config()
const app = express()
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// importing router
app.use('/places', require('./controllers/places'))

app.get('/', (req,res)=>{
    // res.send('Hello World')
    res.render('home')
})
// creating 404 route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)

