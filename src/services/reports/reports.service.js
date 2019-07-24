// Initializes the `Reports` service on path `/reports`
const createService = require('feathers-mongoose');
const createModel = require('../../models/reports.model');
const hooks = require('./reports.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  // const paginate = app.get('paginate');

  const options = {
    Model,
    paginate: {
      default: 50,
      max: 500,
    }
  };

  // Initialize our service with any options it requires
  app.use('/reports', createService(options));
  // app.service('reports').find({
  //   paginate: {
  //     default: 100,
  //     max: 200
  //   }
  // });
  // Get our initialized service so that we can register hooks
  // const service = app.service('reports');

  const service = app.service('reports').hooks({
    before: {
      async find(context) {
        // console.log(context.params.query);
        if (context.params.query.dashboard === 'true') {
          const { Model } = context.app.service('reports');
          // context.params.query = { cameraID: '1001', count: 1 };
          context.params.paginate = false;
          delete context.params.query.$limit;

          const results = await Model.aggregate([
            {
              $group: { _id: '$cameraID' }
            }
          ]);
          context.result = results;

          return context;
        }
      }
    }
  });

  service.hooks(hooks);
};
