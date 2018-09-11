const mongoose = require('mongoose');

const BussinessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 40
  },
  phoneNum: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^0(\d{9})$|^(\d{10})$/.test(v),
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  addresses: {
    type: [String],
    validate:{
      validator: (arr) => Array.isArray(arr) && arr.every(a => a.length > 1 && a.length < 40) && arr[0] != null,
      message: props => `Please supply at least one valid bussiness address`
    }
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: { 
    type: Date,
    default: Date.now
  }
});

module.exports = new mongoose.Model('Bussiness', BussinessSchema);

