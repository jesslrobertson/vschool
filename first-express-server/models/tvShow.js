const mongoose = require('mongoose')
const Schema = mongoose.Schema

//show blueprint

const tvShowSchema = new Schema({
  title: {
    type: String, 
    required: true
  },
  genre: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("TvShow", tvShowSchema)