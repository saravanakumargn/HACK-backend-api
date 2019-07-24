// Reports-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const reports = new Schema({
    cameraID: {
      type: String,
      required: true,
    },
    // label: String,
    name: String,
    count: Number,
    datetime: Date,
    location: {
      type: [Number],
      required: true,
    },
  }, {
    timestamps: false
  });

  return mongooseClient.model('Database', reports);
};
