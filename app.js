const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const logger = require('./logger')
// const https = require('https');
// const fs = require('fs');

//Port for Deploying on Heroku
const port = process.env.PORT || 3000;

//Loading files from client
app.use(express.static(__dirname+'/client'));

//! 1/2Uncomment This For using HTTPS protocol in localhost (also check at the end of this file)
// const httpsOptions = {
//   cert: fs.readFileSync(__dirname+'/ssl/server.crt'),
//   key: fs.readFileSync(__dirname+'/ssl/server.key')
// }

//Middleware
app.use(morgan('combined'));
app.use(bodyParser.json());



Student = require('./models/students');

//Connect to Mongoose
mongoose.connect('mongodb+srv://cloud:rDORlruez69pGK8t@cluster0-inhwh.mongodb.net/cloudAssignment?retryWrites=true');
var db = mongoose.connection;

app.get('/',function(req,res){
  res.send('Use /api/students for Accesing API');
});

app.get('/api/students', function(req, res){
  Student.getStudents(function(err, student){
    if(err){
      throw err;
    }
    res.json(student);
  });
});

app.get('/api/students/:_id', function(req, res){
  Student.getStudentsById(req.params._id, function(err, student){
    if(err){
      throw err;
    }
    res.json(student);
  });
});

app.post('/api/students', function(req, res){
  var student = req.body;
  Student.addStudents(student,function(err, student){
    if(err){
      throw err;
    }
    res.json(student);
  });
});

app.put('/api/students/:_id', function(req, res){
  var id = req.params._id;
  var student = req.body;
  Student.updateStudents(id, student, {}, function(err, student){
    if(err){
      throw err;
    }
    res.json(student);
  });
});

app.delete('/api/students/:_id', function(req, res){
  var id = req.params._id;
  Student.deleteStudents(id, function(err, student){
    if(err){
      throw err;
    }
    res.json(student);
  });
});

//! 2/2 Uncomment This For using HTTPS protocol in localhost
// https.createServer(httpsOptions, app).listen(port, () => {
//   console.log('Running on port '+port);
// });

app.listen(port, () => {
  console.log('Running on port '+port);
});