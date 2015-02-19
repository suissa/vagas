var express = require('express');
var router = express.Router();
var Controller = require('./../modules/genericContent/controller');

/* GET users listing. */
router.get('/', Controller.retrieve(req, res));
router.get('/:id', Controller.get(req, res));

module.exports = router;
