const mongoose = require('mongoose');

const creditSchema = new mongoose.Schema({
  description: String,
  payment_status: String,
  store_id: mongoose.ObjectId,
  distributor_id: mongoose.ObjectId,
  transaction_id: mongoose.ObjectId,
});

module.exports = mongoose.model('credit', creditSchema);