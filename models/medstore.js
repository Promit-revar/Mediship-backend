const mongoose = require('mongoose');

const medstoreSchema = new mongoose.Schema({
  Name: String,
  Location: String,
  Medicine: [
    {
      type: String,
    },
  ],
  Pincode: Number,
});

module.exports = mongoose.model('MedicalStore', medstoreSchema);
