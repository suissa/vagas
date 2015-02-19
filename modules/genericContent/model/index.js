var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , _schema = require('./../schema')
  , modelName = 'GenericContent'
  , collectionName = 'genericcontents'
  ;

module.exports = mongoose.model(modelName, _schema, collectionName);