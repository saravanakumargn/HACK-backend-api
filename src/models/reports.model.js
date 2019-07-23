// Reports-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const reports = new Schema({
    CameraID: {
      type: String,
      required: true,
    },
    label: String,
    name: String,
    confidence: Number,
    datetime: Date,
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
  }, {
    timestamps: true
  });

  return mongooseClient.model('Database', reports);
};
