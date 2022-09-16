const { Schema } = require('mongoose');

const vehicleSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  mpg: {
    type: Number,
  },
  color: {
    type: String,
  },
  carType: {
    type: String,
    required: true,
  },
});

module.exports = vehicleSchema;
