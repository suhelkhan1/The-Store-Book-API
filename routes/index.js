var express = require('express');
var router = express.Router();
const expensesRoute = require('./expenses.route');
const distributorRoute = require('./distributor.route');
const connection = require('../config/connection');
// const settings = require('../config/setting');

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
module.exports = router;
