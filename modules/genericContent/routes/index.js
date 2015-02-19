var express = require('express');
var router = express.Router();
var Controller = require('./../modules/genericContent/controller');

/* GET users listing. */
router.get('/', function(req, res) {
  Controller.retrieve(req, res);
});

module.exports = router;
