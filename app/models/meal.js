const mongoose = require('mongoose')

const mealSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  photo: {
    type: String
  },
  calories: {
    type: Number
  },
  fat: {
    type: Number
  },
  sugar: {
    type: Number
  },
  protein: {
    type: Number
  },
  carbs: {
    type: Number
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Meal', mealSchema)
