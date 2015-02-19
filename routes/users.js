var express = require('express');
var router = express.Router();
var Controller = require('./../modules/genericContent/controller');

/* GET users listing. */
router.get('/', function(req, res) {
  Controller.create(req, res);
  res.send('respond with a resource');
});

module.exports = router;
