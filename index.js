require('dotenv').config()
const express = require ('express')
const app = express()
// importing router
app.use('/places', require('./controllers/places'))

app.get('/', (req,res)=>{
    res.send('Hello World')
})
// creating 404 route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)
app.listen(process.env.PORT)