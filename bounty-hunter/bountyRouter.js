const express = require("express");
const bountyRouter = express.Router();
const Bounty = require('./models/bounty')


//routes

//get all
bountyRouter.get("/", (req, res, next) => {
  Bounty.find((err, bounties) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(bounties)
  })
})

  //get one
bountyRouter.get('/:bountyId', (req, res, next) => {
  Bounty.findById({_id: req.params.bountyId}, (err, bounty) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(bounty)
  })
})

//post one
bountyRouter.post("/", (req, res, next) => {
  const newBounty = new Bounty(req.body)
  newBounty.save((err, savedBounty) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedBounty)
  })
})

//delete one

bountyRouter.delete("/:bountyId", (req, res, next) => {
  Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, bounty) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted ${bounty.name} from the database`)
  })
})

//update one

bountyRouter.put("/:bountyId", (req, res,next) => {
  Bounty.findOneAndUpdate(
    {_id: req.params.bountyId}, 
    req.body,
    { new: true },
    (err, updatedBounty) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(updatedBounty)
  })
})

//exports

module.exports = bountyRouter;
