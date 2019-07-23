const reports = require('./reports/reports.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(reports);
};
