const express = require("express");
const app = express();
const morgan = require("morgan")
const mongoose = require("mongoose")

//middleware

app.use(express.json());
app.use(morgan("dev"))

//Connect to database
mongoose.connect("mongodb://localhost:27017/tvshow-book-db", () => console.log('connected to database'))

//Routes
app.use("/books", require("./routes/bookRouter.js"));
app.use("/tvShows", require("./routes/tvShowRouter"));

//Error Handler

app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})


//Server Listen //
app.listen(9000, () => {
  console.log("The server is running on Port 9000");
});
