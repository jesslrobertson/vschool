const express = require("express");
const tvShowRouter = express.Router();
const TvShow = require('../models/TvShow.js')

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
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(tvShows)
  })
})

//get by genre

tvShowRouter.get("/search/genre", (req, res, next) => {
  TvShow.find({ genre: req.query.genre }, (err, shows) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(shows)
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
// tvShowRouter.get("/:tvShowId", (req, res, next) => {
//   const tvShowId = req.params.tvShowId
//   const foundShow = tvShows.find(tvShow => tvShow._id === tvShowId )
//   if(!foundShow){
//     const error = new Error("The item was not found.")
//     res.status(500)
//     return next(error)
//   }
//   res.status(200).send(foundShow)
// })

//post one
tvShowRouter.post("/", (req, res, next) => {
  const newTvShow = new TvShow(req.body)
  newTvShow.save((err, savedTvShow) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedTvShow)
  })
})

//delete one
tvShowRouter.delete("/:showId", (req, res, next) => {
  TvShow.findOneAndDelete({_id: req.params.showId}, (err, item) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted ${item.title} from the database`)
  })
})

//update one
tvShowRouter.put('/:showId', (req, res, next) => {
  TvShow.findOneAndUpdate(
    {_id: req.params.showId},
    req.body,
    { new: true },
    (err, updatedTvShow) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedTvShow)
    }
  )
})

module.exports = tvShowRouter;
