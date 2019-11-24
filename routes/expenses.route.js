var express = require('express');
var router = express.Router();
const expensesControler = require('../controller/expenses.controller');

router.get('/expenses', expensesControler.getAllExpnse)
router.post('/expenses', expensesControler.addExpnse)
router.patch('/expenses/:id', expensesControler.updateExpnse)
router.delete('/expenses/:id', expensesControler.deleteExpnse)

module.exports = router;