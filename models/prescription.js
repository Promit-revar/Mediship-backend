const mongoose=require('mongoose');
const presSchema = new mongoose.Schema({
    Medicine:[{
        type:String
    }],
    Doctor:String,
    Date:Date,
    Patient:String
});

module.exports=mongoose.model('prescription',presSchema);