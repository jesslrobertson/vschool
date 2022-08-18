const express = require("express");
const authorRouter = express.Router();
const Author = require("../models/author")

//Routes
//get all

authorRouter.get("/", (req, res, next) => {
  Author.find((err, Authors)=> {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(Authors)
  })
})

//get by genre

authorRouter.get("/search/genre", (req, res, next) => {
  Author.find({ genre: req.query.genre }, (err, Authors) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(Authors)
  })
})

//get author by search term
authorRouter.get("/search", (req, res, next) => {
  const { author } = req.query
  const pattern = new RegExp(author)
  Author.find({ name: { $regex: pattern, $options: 'i'} }, (err, authors) => {
    if(err){
      res.status(500)
      return next(err)
    }
  }) 
})

//post one
authorRouter.post("/", (req, res, next) => {
  const newAuthor = new Author(req.body)
  newAuthor.save((err, savedAuthor) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedAuthor)
  })
})

//delete one
authorRouter.delete("/:AuthorId", (req, res, next) => {
  Author.findOneAndDelete({_id: req.params.AuthorId}, (err, author) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted ${author.name} from the database`)
  })
})

//update one
authorRouter.put('/:AuthorId', (req, res, next) => {
  Author.findOneAndUpdate(
    {_id: req.params.AuthorId},
    req.body,
    { new: true },
    (err, updatedAuthor) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedAuthor)
    }
  )
})

module.exports = authorRouter;