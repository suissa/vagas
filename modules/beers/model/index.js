var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , _schema = require('./../schema')
  , modelName = 'Beer'
  , collectionName = 'beers'
  ;

module.exports = mongoose.model(modelName, _schema, collectionName);