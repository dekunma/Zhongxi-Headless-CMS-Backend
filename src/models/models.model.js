// models-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const models = new Schema({
    Keys    :   { type: Array, required: true },
    Values  :   { type: Array, required: true },
    Name    :   { type: String, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('models', models);
};
