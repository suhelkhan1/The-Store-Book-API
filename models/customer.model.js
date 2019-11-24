const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  phone: String,
});

module.exports = mongoose.model('customer', customerSchema);