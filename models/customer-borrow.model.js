const mongoose = require('mongoose');

const customerBorrowSchema = new mongoose.Schema({
  description: String,
  payment_status: String,
  store_id: mongoose.ObjectId,
  cutomer_id: mongoose.ObjectId,
  transaction_id: mongoose.ObjectId,
});

module.exports = mongoose.model('customer_borrow', customerBorrowSchema);