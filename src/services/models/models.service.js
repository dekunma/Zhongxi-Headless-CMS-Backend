// Initializes the `models` service on path `/models`
const createService = require('feathers-mongoose');
const createModel = require('../../models/models.model');
const hooks = require('./models.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/models', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('models');

  service.hooks(hooks);
};
