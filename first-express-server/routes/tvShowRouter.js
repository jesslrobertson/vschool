const express = require("express");
const tvShowRouter = express.Router();
const TvShow = require('../models/tvShow')

//practice data

// const tvShows = [
//   { title: "Arrested Development", genre: "comedy", _id: uuidv4() },
//   { title: "Sense 8", genre: "action", _id: uuidv4() },
//   { title: "The Good Place", genre: "comedy", _id: uuidv4() },
//   { title: "Adventure Time", genre: "animation", _id: uuidv4() },
//   { title: "Midnight Mass", genre: "horror", _id: uuidv4() }
// ];

//Routes


//get all

tvShowRouter.get("/", (req, res, next) => {
  TvShow.find((err, tvShows)=> {
    console.log('Hit tvshow get all')
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(tvShows)
  })
})
//get all, post one
// tvShowRouter.route("/")
//   .get((req, res, next) => {
//     res.status(200)
//     res.send(tvShows);
//   })
//   .post((req, res) => {
//     const newShow = req.body;
//     newShow._id = uuidv4();
//     console.log(newShow);
//     tvShows.push(newShow);
//     res.send(newShow);
//   });

//get one
tvShowRouter.get("/:tvShowId", (req, res, next) => {
  const tvShowId = req.params.tvShowId
  const foundShow = tvShows.find(tvShow => tvShow._id === tvShowId )
  if(!foundShow){
    const error = new Error("The item was not found.")
    res.status(500)
    return next(error)
  }
  res.status(200).send(foundShow)
})

//delete one
tvShowRouter.delete("/:showId", (req, res, next) => {
  const showId = req.params.showId
  const showIndex = tvShows.findIndex(show => show._id === showId)
  tvShows.splice(showIndex, 1)
  if(!showIndex){
    const error = new Error(`The item with ID ${showId} was not found.`)
    return next(error)
  }
  res.send("Successfully deleted show!")

})

//update one
tvShowRouter.put('/:showId', (req, res, next) => {
  const showId = req.params.showId
  const showIndex = tvShows.findIndex(show => show._id === showId)
  console.log(showIndex)
  if(!showId){
    const error = new Error(`The item with ID ${showId} was not found.`)
    return next(error)
  }
  const updatedShow = Object.assign(tvShows[showIndex], req.body)
  res.status(201).send(updatedShow)
})

module.exports = tvShowRouter;
