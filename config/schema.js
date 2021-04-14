const mongoose=require('mongoose');
const docSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Patients:[{
      type: String
  }],
  Password: String,
});

module.exports=mongoose.model('Doctor',docSchema);