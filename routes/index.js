var express = require('express');
var router = express.Router();
const connection = require('../config/connection');
// const settings = require('../config/setting');

const expensesRoute = require('./expenses.route');
const distributorRoute = require('./distributor.route');
const customerRoute = require('./customer.route');
const storeRoute = require('./store.route');
const userRoute = require('./user.route');
const creditRoute = require('./credit.route');
const customerBorrowRoute = require('./customer-borrow.route');

(async () => {
  try {
    // const connectionObj = new Connection ({
    //   dbUrl: settings.dbUrl
    // })
    connection.createConnection();
  } catch (err) {
    console.log(err);
  }
})();

router.use(expensesRoute);
router.use(distributorRoute);
router.use(customerRoute);
router.use(storeRoute);
router.use(userRoute);
router.use(creditRoute);
router.use(customerBorrowRoute);
module.exports = router;
