const router = require('express').Router()
const places = require('../models/places.js')
router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})
// router.post('/', (req, res) => {
//   console.log(req.body)
//   res.send('POST /places')
// })

router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Break Fast, Oatmeal Variety',
    pic: '/images/breakFast.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Healthy Option, Chia fruit drink',
    pic: '/images/chia-fruit-drink1.jpg'
  }]
  res.render('places/index', { places })
})

module.exports = router