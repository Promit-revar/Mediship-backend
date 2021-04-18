const mongoose = require('mongoose');
const docSchema = new mongoose.Schema({
  Name: String,

  Company: String,

  StoreAvailable: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model('Doctor', docSchema);
