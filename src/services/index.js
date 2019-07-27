const models = require('./models/models.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(models);
};
