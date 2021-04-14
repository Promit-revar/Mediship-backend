const schdoc=require('../models/doctor');
const patdoc=require('../models/patient')
module.exports = function (app,connection) {
  app.get('/', (req, res) => {
    res.send('hello world');
  });
  app.post('/doctor', async(req, res) => {
    console.log(req.body);
    const {
        name,pass,email,patients
    } = req.body; 
    
    const obj=new schdoc({
        Name: name,
       Email: email,
       Patients: patients,
       Password: pass,
    });
    
    const result=await obj.save();
    console.log(result);
    res.send(result);
  });
  app.get('/doctor', async(req, res) => {
    
      const result =await schdoc.find();
      //const patients=result.Patients[id];
    
      res.send(result);
  });
  app.post('/patient', async(req, res) => {
    console.log(req.body);
    const {
       id,name,age
    } = req.body; 
    
    const obj=new patdoc({
        userId:id,
        Name:name,
        Age:age,
    });
    const result=await obj.save();
    console.log(result);
    res.send(result);
    });
};
