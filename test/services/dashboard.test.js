const assert = require('assert');
const app = require('../../src/app');

describe('\'Dashboard\' service', () => {
  it('registered the service', () => {
    const service = app.service('dashboard');

    assert.ok(service, 'Registered the service');
  });
});
