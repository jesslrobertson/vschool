const express = require("express");
const app = express();
const morgan = require("morgan")
const mongoose = require("mongoose")

//middleware
app.use(express.json());
app.use(morgan("dev"))

//Connect to database
mongoose.connect('mongodb+srv://jess-r-codes:fydhih-puTciz-5ketco@cluster0.dc6tcnp.mongodb.net/tv-show-book?retryWrites=true&w=majority', () => console.log("Connected to Atlas DB"));

//Routes
app.use("/books", require("./routes/bookRouter.js"));
app.use("/tvShows", require("./routes/tvShowRouter"));
app.use("/authors", require("./routes/authorRouter"))

//Error Handler
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})


//Server Listen //
app.listen(9000, () => {
  console.log("The server is running on Port 9000");
});
