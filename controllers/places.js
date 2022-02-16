const router = require('express').Router()
// router.get('/', (req,res)=>{
//     res.render('places/index')
// })
router.get('/new', (req, res) => {
  res.render('places/new')
})
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

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
    res.render('places/index',{places})
  })

module.exports = router