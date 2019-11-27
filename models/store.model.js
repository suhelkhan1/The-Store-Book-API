const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  name: String,
  location: String,
  user_id: mongoose.ObjectId
});

module.exports = mongoose.model('store', storeSchema);