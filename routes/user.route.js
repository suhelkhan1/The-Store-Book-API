var express = require('express');
var router = express.Router();
const userControler = require('../controller/user.controller');

router.get('/user', userControler.getAllUser)
router.post('/user', userControler.addUser)
router.patch('/user/:id', userControler.updateUser)
router.delete('/user/:id', userControler.deleteUser)

module.exports = router;