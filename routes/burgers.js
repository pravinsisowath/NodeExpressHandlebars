const router = require('express').Router()
const { Burger } = require('../controllers')

router.get('/burgers', (req, res) =>
  Burger.getBurgers((burgers) => res.json(burgers))
)
