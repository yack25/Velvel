const mongoose = require('mongoose');

const AdSchema = new mongoose.Schema({
  _bussiness: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bussiness',
    required: true
  },
  relevanceStart: {
    type: Date,
    default: Date.now
  },
  relevanceEnd: {
    type: Date,
    default: new Date(Date.now + 7 * 24 * 60 * 60 * 1000)
  },
  image: {
    type: Buffer,
    required: true,
    contentType: String
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
  tags: {
    type: [String],
    validate:{
      validator: (arr) => Array.isArray(arr) && arr.every(a => a.length > 1 && a.length < 10) && arr.length <= 5,
      message: props => `Invalid tags`
    },
    index: true
  }
});

AdSchema.index({ _bussiness: 1 , created: -1 }, { unique: true });
module.exports = mongoose.model('Ad', AdSchema);