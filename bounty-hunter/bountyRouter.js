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
    _id: uuidv4(),
  },

  {
    name: "Anakin Skywalker",
    alignment: "sith",
    status: "alive",
    reward: 5000,
    _id: uuidv4(),
  },

  {
    name: "Emperor Palpatine",
    alignment: "sith",
    status: "alive",
    reward: 8000,
    _id: uuidv4(),
  },
];

//routes

bountyRouter.route("/")
  .get((req, res) => {
    res.send(bounties);
  })
  .post((req, res) => {
    const newBounty = req.body;
    newBounty._id = uuidv4();
    console.log(newBounty);
    bounties.push(newBounty);
    res.send(`Successfully added ${newBounty.name} to the database`)
  });

//exports

module.exports = bountyRouter;
