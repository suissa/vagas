var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , typeContent = 'generic'
    , refCreator = 'User'
    , refCertified = 'User'
    , Schema = {
        created_at: { type: Date, default: Date.now }
      , type: { type: String, default: typeContent }
      , title: { type: String, default: '' }
      , creator: { 
          id: { type: Schema.Types.ObjectId, ref: refCreator },
          name: { type: String, default: 'Suissa' }
        }
      , certifieds: [{ type: Schema.Types.ObjectId, ref: refCertified }]
      , chapters: [{ type: Schema.Types.Mixed }]
    }
    ;
module.exports = Schema;