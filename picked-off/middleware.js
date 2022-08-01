const { application } = require('express')
const express = require('express')
const middleware = express.Router()

const data = [
  {
    "title": "middleware practice",
    "purpose": "gain experience"
  }
]

middleware.use('/', (req, res, next) => {
    console.log("Middleware is executing")
    next()
  })

middleware.use('/', (req, res, next) => {
    req.body = {
      "wasSuccessful": "maybe"
    }
    next()
  })

middleware.get('/', (req, res, next) => {
    console.log("get request received")
    res.send(req.body)
  })


module.exports = middleware
