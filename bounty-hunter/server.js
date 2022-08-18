const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')


//middleware

app.use(express.json());
app.use(morgan("dev"))

//connect to DB
mongoose.connect('mongodb+srv://jess-r-codes:fydhih-puTciz-5ketco@cluster0.dc6tcnp.mongodb.net/bounty-hunter?retryWrites=true&w=majority', () => console.log("The bounty-hunter server is running"))

//routes
app.use('/bounties', require('./bountyRouter'))

//error handler
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})



app.listen(8000, () => {
  console.log("The server is running on port 8000")
})