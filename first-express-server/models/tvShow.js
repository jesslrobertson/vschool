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
    enum: ['action', 'fantasy', 'comedy', 'horror'],
    required: true
  }
})

module.exports = mongoose.model("TvShow", tvShowSchema)