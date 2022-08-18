express = require('express')
const storeRouter = express.Router()
const Inventory = require('../models/inventory')


//Routes
//get all

storeRouter.get("/", (req, res, next) => {
  Inventory.find((err, items) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(items)
  })
})

//get one

storeRouter.get("/:itemId", (req, res, next)=> {
  Inventory.findById({_id: req.params.itemId}, (err, item) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(item)
  })
})

//post one

storeRouter.post("/", (req, res, next) => {
  const newInventory = new Inventory(req.body)
  newInventory.save((err, savedInventory) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedInventory)
  })
})

//delete one

storeRouter.delete("/:itemId", (req, res, next) => {
  Inventory.findOneAndDelete({_id: req.params.itemId}, (err, item) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted ${item.name} from the database`)
  })
})





module.exports = storeRouter
