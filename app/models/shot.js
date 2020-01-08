// 1/2/20: first attempts at adding a new shots database schema to connect to the clubs
const mongoose = require('mongoose')

const shotSchema = new mongoose.Schema({
  distance: {
    type: Number,
    required: true
  },
  quality: {
    type: String
  },
  club: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Shot', shotSchema)
