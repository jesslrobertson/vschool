const mongoose = require('mongoose')
const Schema = mongoose.Schema

//bounty blueprint

const bountySchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  alignment: {
    type: String,
    required: true
  },
  living: {
    type: Boolean,
    required: true
  },
  reward: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("Bounty", bountySchema)