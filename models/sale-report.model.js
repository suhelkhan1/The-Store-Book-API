const mongoose = require('mongoose');

const saleReportSchema = new mongoose.Schema({
  store_id: mongoose.ObjectId,
  credit_id: mongoose.ObjectId,
  transaction_id: mongoose.ObjectId,
  expense_id: mongoose.ObjectId,
  customer_borrow_id: mongoose.ObjectId,
});

module.exports = mongoose.model('sale_report', saleReportSchema);