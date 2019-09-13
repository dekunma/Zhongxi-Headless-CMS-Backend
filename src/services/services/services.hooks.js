const hooks = require('feathers-authentication-hooks');
const auth = require('@feathersjs/authentication');
const log  =  require('../../hooks/log')
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [log()],
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
