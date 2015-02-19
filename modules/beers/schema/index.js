var ingredientSchema = require('./ingredient')
  , Schema = {
      name: { type: String, default: '' }
    , description: { type: String, default: '' }
    , alcohol: { type: Number, min: 0, default: 0}
    , price: { type: Number, min: 0, default: 0}
    , category: { type: String, default: ''}
    , created_at: { type: Date, default: Date.now }
    , ingredients: [ingredientSchema]
    }
  ;

module.exports = Schema;