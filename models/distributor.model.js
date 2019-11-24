const mongoose = require('mongoose');

const distributorSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  description: String,
});

module.exports = mongoose.model('distributor', distributorSchema);