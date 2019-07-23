// Initializes the `Reports` service on path `/reports`
const createService = require('feathers-mongoose');
const createModel = require('../../models/reports.model');
const hooks = require('./reports.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/reports', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('reports');

  service.hooks(hooks);
};
