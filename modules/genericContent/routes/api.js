var express = require('express');
var router = express.Router();
var Controller = require('./../controller');

router.get('/', function(req, res) {
  Controller.retrieve(req, res);
});

router.get('/:id', function(req, res) {
  Controller.get(req, res);
});

router.post('/', function(req, res) {
  Controller.retrieve(req, res);
});

module.exports = router;
