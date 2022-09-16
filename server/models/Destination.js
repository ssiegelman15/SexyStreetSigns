const { Schema } = require('mongoose');

const destinationSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  zipcode: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  fullAddress: {
    type: String,
  },
});

module.exports = destinationSchema;
