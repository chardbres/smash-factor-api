const mongoose = require('mongoose')

const shotSchema = new mongoose.Schema({
  distance: {
    type: Number,
    required: true
  },
  quality: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Club',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Shot', shotSchema)
