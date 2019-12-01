const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  amount: String,
  description: String,
  type: String,
  store_id: mongoose.ObjectId
});

module.exports = mongoose.model('transaction', transactionSchema);