const hooks = require('feathers-authentication-hooks');
const auth = require('@feathersjs/authentication');
module.exports = {
  before: {
    all: [auth.hooks.authenticate(['jwt', 'local'])],
    find: [],
    get: [],
    create: [hooks.associateCurrentUser({ idField: 'id', as: 'sentBy' })],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
