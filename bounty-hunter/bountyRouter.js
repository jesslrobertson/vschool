const express = require("express");
const { v4: uuidv4 } = require("uuid");
const bountyRouter = express.Router();

//data
const bounties = [
  {
    name: "Obi Wan Kenobi",
    alignment: "jedi",
    status: "alive",
    reward: 1000,
    _id: "06e5f784-1764-43d4-b665-4ab4e9ae9de4"
  },

  {
    name: "Anakin Skywalker",
    alignment: "sith",
    status: "alive",
    reward: 5000,
    _id: "20bcdc6a-820a-4af4-872e-5311ab8a797f"
  },

  {
    name: "Emperor Palpatine",
    alignment: "sith",
    status: "alive",
    reward: 8000,
    _id: "53c2baa3-e3d7-4506-8541-565dc4cea5fb"
  }
];

//routes

bountyRouter.route("/")
  .get((req, res) => {
    res.send(bounties);
  })
  .post((req, res) => {
    const newBounty = req.body;
    newBounty._id = uuidv4();
    bounties.push(newBounty);
    res.send(newBounty)
    console.log(`Successfully added ${newBounty.name} to database`)
  })

  //get one
bountyRouter.get('/:bountyId', (req, res) => {
  const bountyId = req.params.bountyId
  const foundBounty = bounties.find(bounty => bounty._id === bountyId) 
  res.send(foundBounty)
})

//delete one

bountyRouter.delete("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId
  const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
  bounties.splice(bountyIndex, 1)
  res.send("Successfully deleted bounty")
})

//update one

.put("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId
  const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
  const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
  res.send(updatedBounty)
})

//exports

module.exports = bountyRouter;
