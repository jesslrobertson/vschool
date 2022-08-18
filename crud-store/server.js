const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')

//middleware

app.use(express.json())
app.use(morgan("dev"))

//connect to database

mongoose.connect('mongodb+srv://jess-r-codes:fydhih-puTciz-5ketco@cluster0.dc6tcnp.mongodb.net/store?retryWrites=true&w=majority', () => console.log("The Store server is running"))


//routes
app.use('/store', require("./routes/storeRouter.js"))


//error handler

app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})


app.listen(9000, () => {
  console.log('The server is running on port 9000')
})