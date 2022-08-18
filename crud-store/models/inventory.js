const mongoose = require('mongoose')
const Schema = mongoose.Schema

//inventory blueprint

const inventorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("Inventory", inventorySchema)