const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test:27018');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongodb!!');
  });