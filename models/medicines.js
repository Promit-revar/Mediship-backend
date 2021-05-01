const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  Name: String,
  Company: String,
  StoreAvailable: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model('Doctor', medicineSchema);
