const express = require("express");
const bookRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

//data //
const books = [
  { title: "The Starless Sea", genre: "fantasy", _id: uuidv4() },
  { title: "The Body Keeps the Score", genre: "psychology", _id: uuidv4() },
  { title: "Name of the Wind", genre: "fantasy", _id: uuidv4() },
  { title: "Planetary Herbology", genre: "herbalism", _id: uuidv4() },
  { title: "ACT with Love", genre: "self-help", _id: uuidv4() },
];

//Routes 

//get all, post one
bookRouter.route("/")
  .get((req, res) => {
    res.send(books)
  })
  .post((req, res) => {
    const newBook = req.body;
    newBook._id = uuidv4();
    console.log(newBook);
    books.push(newBook);
    res.send(`Successfully added ${newBook.title} to the database`);
  });

  //get one

  bookRouter.get("/:bookId", (req, res) => {
    const bookId = req.params.bookId
    const foundBook = books.find(book => book._id === bookId)
    res.send(foundBook)
  })

  //get by genre
  bookRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredBooks = books.filter( book => book.genre === genre)
    res.send(filteredBooks)
  })

  //delete one
  bookRouter.delete("/:bookId")

module.exports = bookRouter;
