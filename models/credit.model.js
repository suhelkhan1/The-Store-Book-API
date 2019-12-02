const mongoose = require('mongoose');

const creditSchema = new mongoose.Schema({
  amount: Object,
  distributor: Object,
  store_id: mongoose.ObjectId,
  distributor_id: mongoose.ObjectId,
  transaction_id: mongoose.ObjectId,
  payment_status: Boolean,
});

module.exports = mongoose.model('credit', creditSchema);