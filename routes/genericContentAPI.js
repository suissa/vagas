var express = require('express');
var router = express.Router();
var Controller = require('./../modules/genericContent/controller');

router.get('/', Controller.retrieve(req, res));
router.get('/:id', Controller.get(req, res));

router.post('/', Controller.create(req, res));

module.exports = router;
