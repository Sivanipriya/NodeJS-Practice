const express=require('express');
const { setup }=require('./database/databaseconfig.js')
//const router=require('./Controllers/controller.js')
const mongoose=require('mongoose');
const model=require('./Models/model.js')

const app=express();
var cors = require('cors')
 const router=require('./Router/Router.js');
require("dotenv").config();
console.log(process.env.NODE_ENV);
app.use(express.json());
setup();
app.set('view engine', 'ejs');
app.use(router);
var whitelist = ['http://localhost:4000/getcourse','http: //example1.com', 'http://example2.com']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  console.log('Origin:', req.header('Origin')); 
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
app.use(cors(corsOptionsDelegate))
//index page
 app.get('/', function(req, res) {
  model.find().then((data)=>{res.send(data)}).catch((err)=>{console.log(err);})  //  res.render('pages/index');
 });

 
 /**
  * METHOD = GET
  * USAGE = Help us to get the data from the database
  */
 app.get("/", (req, res, next) => {
   const data = model.aggregate([
     {
       $project: {
         
         _id: 0,
       },
     },
   ]).exec();
   data
     .then((response) => {
       if (response.length > 0) {
         return res.status(200).json({
           success: true,
           message: "Turfs fetched successfully",
           data: response,
         });
       } else {
         return res.status(200).json({
           success: true,
           message: "Sorry! No turfs found near you",
           data: response,
         });
       }
     })
     .catch((error) => {
       return res.status(401).json({
         success: false,
         message: "Something went wrong",
         error: error,
       });
     });
 });
 
 /**
  * METHOD = GET
  * USAGE = Help us to get the data from the database
  */
 app.get("/:id", (req, res, next) => {
   const { id = "" } = req.params;
   
   const data = model.aggregate([
     { $match: { _id: new mongoose.Types.ObjectId(id) } },
     {
       $project: {
         __v: 0,
         _id:0,
       },
     },
   ]).exec();
   data
     .then((response) => {
       if (response.length > 0) {
         return res.status(200).json({
           success: true,
           message: "Turf fetched successfully",
           data: response,
         });
       } else {
         return res.status(200).json({
           success: true,
           message: "Sorry! No turf found near you",
           data: response,
         });
       }
     })
     .catch((error) => {
       return res.status(401).json({
         success: false,
         message: "Something went wrong",
         error: error,
       });
     });
 });
 
 /**
  * METHOD = POST
  * USAGE = Help us to get the data from the database
  */
 app.post("/", (req, res, next) => {
  const Turf = new model(req.body);

  Turf.save()
      .then((response) => {
          res.status(200).json({
              success: true,
              message: "Turfs created successfully",
              data: response,
          });
      })
      .catch((error) => {
          console.error("Error saving turf:", error); // Log the error
          res.status(500).json({ // Use 500 for server errors
              success: false,
              message: "Something went wrong",
              error: error.message, // Return the error message
          });
      });
});

 
 /**
  * METHOD = DELETE
  * USAGE = Help us to get the data from the database
  */
 app.delete("/:id", (req, res, next) => {
   const { id = "" } = req.params;
   model.deleteOne({ _id: new mongoose.Types.ObjectId(id) })
     .then((response) => {
       if (response.acknowledged && response.deletedCount == 1) {
         res.status(200).json({
           success: true,
           message: "Turf deleted successfully",
         });
       } else {
         res.status(200).json({
           success: false,
           message: "Turf is not available or deleted already",
         });
       }
     })
     .catch((error) => {
       res.status(401).json({
         success: false,
         message: "Something went wrong",
         error: error,
       });
     });
 });

app.listen(4000,()=>{
    console.log("server listening");
})



















// const express=require('express');
// const app=express();
// const router=require('./Router/Router.js');

// app.use(express.json());


// app.use(router);



// app.listen(5000,()=>{
//     console.log("Server listenning");
// })