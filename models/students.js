const mongoose = require('mongoose');

//Students Schema
const studentSchema = mongoose.Schema({
  
  student_id:{
    type:Number,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  phone_number:{
    type:String,
    required:true
  },
  program:{
    type:String,
    required:true
  },
  image_url:{
    type:String,
    required:true
  },
  create_date:{
    type:Date,
    default: Date.now
  }
});

const Student = module.exports = mongoose.model('Student', studentSchema);

//GET Student
module.exports.getStudents = function(callback,limit){
  Student.find(callback).limit(limit);
}

//GET Student By ID
module.exports.getStudentsById = function(id, callback){
  Student.findById(id, callback);
}


//Add Student
module.exports.addStudents = function(student, callback){
  Student.create(student, callback);
}

//Update Student
module.exports.updateStudents = function(id, student, options,  callback){
  var query = {_id: id};
  var update = {
    student_id: student.student_id,
    name: student.name,
    email: student.email,
    phone_number: student.phone_number,
    program: student.program,
    image_url: student.image_url
  }
  Student.findOneAndUpdate(query, update, options, callback);
}

//Delete Student
module.exports.deleteStudents = function(id, callback){
  var query = {_id: id};
  Student.findOneAndRemove(query, callback);
}