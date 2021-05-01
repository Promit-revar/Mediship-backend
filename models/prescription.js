const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
  Medicine: [
    {
      type: String,
    },
  ],
  Doctor: String,
  Date: Date,
  Patient: String,
});

module.exports = mongoose.model('Prescription', prescriptionSchema);
