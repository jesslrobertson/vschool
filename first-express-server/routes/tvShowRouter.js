const express = require("express");
const tvShowRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

//practice data

const tvShows = [
  { title: "Arrested Development", _id: uuidv4() },
  { title: "Sense 8", _id: uuidv4() },
  { title: "The Good Place", _id: uuidv4() },
  { title: "Adventure Time", _id: uuidv4() },
  { title: "Midnight Mass", _id: uuidv4() },
];

//Routes //
tvShowRouter.route("/")
  .get((req, res) => {
    res.send(tvShows);
  })
  .post((req, res) => {
    const newShow = req.body;
    newShow._id = uuidv4();
    console.log(newShow);
    tvShows.push(newShow);
    res.send(`Successfully added ${newShow.title} to the database`);
  });

module.exports = tvShowRouter;
