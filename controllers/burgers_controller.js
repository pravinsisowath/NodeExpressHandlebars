let express = require("express")
let burgers = require("../models/burger.js")
let router = express.Router()

router.get("/burgers", function(req,res){
    burgers.getBurgers((burgers) =>
    res.json(burgers))
})

router.post("/burgers", (req, res) =>
  burgers.addBurger(req.body, (info) => 
  res.json(info))
)

router.put("/burgers/:id", (req, res) =>
  Burger.updateBurger(req.body, { id: req.params.id }, (info) => 
  res.json(info))
)

module.exports = router;