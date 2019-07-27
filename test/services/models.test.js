const assert = require('assert');
const app = require('../../src/app');

describe('\'models\' service', () => {
  it('registered the service', () => {
    const service = app.service('models');

    assert.ok(service, 'Registered the service');
  });
});
