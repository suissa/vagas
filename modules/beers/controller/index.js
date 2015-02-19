var Model = require('./../model')
  , Controller = {}
  ;

Controller.create = function() {
  var data = {
        name: 'Skol'
      , ingredients: [{name: 'milho', quantity: 600, type: 'g'}]
      }
    , model = new Model(data)
    ;

  model.save(function(err, data) {
    if(err) {
      console.log('ERRO: ', err);
    }
    console.log('Criou: ', data);
  });
};

// Rodando o CREATE
Controller.create();

// Função de listagem por isso a query é sempre {}
Controller.retrieve = function(req, res) {
  var query = {};
  Model.find(query, function(err, data) {
    if(err) {
      console.log('ERRO: ', err);
      res.end(JSON.stringify(err));
    }
    console.log('Listou: ', data);
    res.end(JSON.stringify(data));
  });
};

module.exports = Controller;


