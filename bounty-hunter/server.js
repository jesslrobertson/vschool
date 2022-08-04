const express = require("express")
const app = express()
const morgan = require("morgan")


//middleware

app.use(express.json());
app.use('/bounties', require('./bountyRouter'))
app.use(morgan("dev"))








app.listen(8000, () => {
  console.log("The server is running on port 8000")
})