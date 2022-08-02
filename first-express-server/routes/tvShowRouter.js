const express = require("express");
const tvShowRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

//practice data

const tvShows = [
  { title: "Arrested Development", genre: "comedy", _id: uuidv4() },
  { title: "Sense 8", genre: "action", _id: uuidv4() },
  { title: "The Good Place", genre: "comedy", _id: uuidv4() },
  { title: "Adventure Time", genre: "animation", _id: uuidv4() },
  { title: "Midnight Mass", genre: "horror", _id: uuidv4() }
];

//Routes //

//get all, post one
tvShowRouter.route("/")
  .get((req, res) => {
    res.send(tvShows);
  })
  .post((req, res) => {
    const newShow = req.body;
    newShow._id = uuidv4();
    console.log(newShow);
    tvShows.push(newShow);
    res.send(newShow);
  });

//get one
tvShowRouter.get("/:tvShowId", (req, res) => {
  const tvShowId = req.params.tvShowId
  const foundShow = tvShows.find(tvShow => tvShow._id === tvShowId )
  res.send(foundShow)
})

//delete one
tvShowRouter.delete("/:showId", (req, res) => {
  const showId = req.params.showId
  const showIndex = tvShows.findIndex(show => show._id === showId)
  tvShows.splice(showIndex, 1)
  res.send("Successfully deleted show!")

})

//update one
tvShowRouter.put('/:showId', (req, res) => {
  const showId = req.params.showId
  const showIndex = tvShows.findIndex(show => show._id === showId)
  console.log(showIndex)
  const updatedShow = Object.assign(tvShows[showIndex], req.body)
  res.send(updatedShow)
})

module.exports = tvShowRouter;
