const schdoc=require('../models/doctor');
const patdoc=require('../models/patient');
const flash = require('connect-flash');
const { response } = require('express');

module.exports = function (app,connection) {
  //let Doctor={};
  //app.use(flash());
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
  app.post('/authdoctor', async(req, res) => {
      const{
        pass,mail
      }=req.body;
      const result =await schdoc.find({
        Email:mail,
      Password:pass
    });
   
    
    
      
    res.send(result);
  });

  app.post('/patient/:docid', async(req, res) => {
    const id=req.body.id;
    const docid=req.params.docid;
   // console.log(req.body);
    //const id= req.body.id; 
    
    /*const obj=new patdoc({
        userId:id,
        Name:name,
        Age:age,
       
    });*/
    const result=await patdoc.find({
      userId:id,
      //Name:name,
      //Age:age
    })
    if(result!==undefined){

   
  
    addPatient(id,docid);
    }
    else{
      res.send("No such user exist...")
    }
    
    
    });
   /* app.get('/pateint/:ids',(req,res)=>{
         console.log(req.params.ids);
        // console.log(req.params.ids['pid']);
    });*/
    async function addPatient(id,docid){
      //var Doctor=req.flash('doctor');
      console.log(docid);
      console.log(id);
      const doctor=await schdoc.findById(docid);
      const result=await patdoc.find({
        userId:id,
      });
      
      
      console.log(result.Name);//undifined...
      console.log(doctor.Name);
    }
};
