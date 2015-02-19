var Model = require('./../model')
  , Controller = {}
  ;

Controller.create = function(req, res) {
  var data = req.body
    , model = new Model(data)
    ;

  model.save(function(err, data) {
    if(err) {
      console.log('ERRO: ', err);
      res.json(err);
    }
    console.log('Listou: ', data);
    res.json(data);
  });
};

// Função de listagem por isso a query é sempre {}
Controller.retrieve = function(req, res) {
  var query = {};
  Model.find(query, function(err, data) {
    if(err) {
      console.log('ERRO: ', err);
      res.json(err);
    }
    console.log('Listou: ', data);
    res.json(data);
  });
};

Controller.get = function(req, res) {
  var query = { _id: req.params.id };
  Model.findOne(query, function(err, data) {
    if(err) {
      console.log('ERRO: ', err);
      res.json(err);
    }
    console.log('Listou: ', data);
    res.json(data);
  });
};

Controller.update = function(req, res) {
  var query = { _id: req.params.id }
    , mod = req.body
    ;

  Model.update(query, mod, function(err, data) {
    if(err) {
      console.log('ERRO: ', err);
      res.json(err);
    }
    console.log('Listou: ', data);
    res.json(data);
  });
};

Controller.delete = function(req, res) {
  var query = { _id: req.params.id };
  Model.remove(query, function(err, data) {
    if(err) {
      console.log('ERRO: ', err);
      res.json(err);
    }
    console.log('Listou: ', data);
    res.json(data);
  });
};

module.exports = Controller;


