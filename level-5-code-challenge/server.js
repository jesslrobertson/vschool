const express = require("express")
const app = express()
const morgan = require("morgan")

//Middleware for every response
app.use(express.json())
app.use(morgan("dev"))

// Routes
// 1. Set up a route to pull from Routes/bountyRouter.js file (at endpoint "/bounties")
app.use('/bounties', require('./routes/bountyRouter.js'))

// Server Listen
app.listen(9000, () =>{
    console.log("The server is running on port 9000")
})