// services-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const services = new Schema({
    name: { type: String, required: true },
    keys : {type: Array, required: true},
    values : {type: Array, required: true},
  }, {
    timestamps: true
  });

  return mongooseClient.model('services', services);
};
