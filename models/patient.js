const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  userId: String,
  Name: String,
  Age: Number,
  Radius: Number,
  VisitedDoctors: [
    {
      type: String,
    },
  ],
  Prescriptions: [
    {
      type: String,
    },
  ],
  Medicines: [
    {
      type: String,
    },
  ],
  Mob: String,
  Gender: String,
  Email: String,
});

module.exports = mongoose.model('Patient', patientSchema);
