const express = require("express");
const bookRouter = express.Router();
const Book = require("../models/book")

//Routes


//get all

bookRouter.get("/", (req, res, next) => {
  Book.find((err, Books)=> {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(Books)
  })
})

//get by author
bookRouter.get("/:authorId", (req, res, next) => {
  Book.find({ author: req.params.authorId }, (err, books) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(books)
  })
})

//get by genre

bookRouter.get("/search/genre", (req, res, next) => {
  Book.find({ genre: req.query.genre }, (err, books) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(books)
  })
})

//find books by like range
bookRouter.get("/search/bylikes", (req, res, next) => {
  Book.where("likes").gte(5).exec((err, books) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(books)
  })
})

//post one
bookRouter.post("/:authorId", (req, res, next) => {
  req.body.author = req.params.authorId
  const newBook = new Book(req.body)
  newBook.save((err, savedBook) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedBook)
  })
})

//delete one
bookRouter.delete("/:bookId", (req, res, next) => {
  book.findOneAndDelete({_id: req.params.bookId}, (err, item) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted ${item.title} from the database`)
  })
})

//update one
bookRouter.put('/:bookId', (req, res, next) => {
  Book.findOneAndUpdate(
    {_id: req.params.bookId},
    req.body,
    { new: true },
    (err, updatedBook) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedBook)
    }
  )
})

//like a book 
bookRouter.put("/like/:bookId", (req, res, next) => {
  Book.findOneAndUpdate(
    {_id: req.params.bookId},
    { $inc: { likes: 1}},
    {new: true},
    (err, updatedBook) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedBook)
    }
  )
})



module.exports = bookRouter;
