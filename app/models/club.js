const mongoose = require('mongoose')

const clubSchema = new mongoose.Schema({
  style: {
    type: String,
    required: true
  },
  brand: {
    type: String
  },
  flex: String,
  loft: Number,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Club', clubSchema)
