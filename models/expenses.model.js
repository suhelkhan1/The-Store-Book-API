const mongoose = require('mongoose');

const expensesSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  name: String,
});

module.exports = mongoose.model('expenses', expensesSchema);