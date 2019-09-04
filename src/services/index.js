const services = require('./services/services.service.js');
const data = require('./data/data.service.js');
const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(services);
  app.configure(data);
  app.configure(users);
};
