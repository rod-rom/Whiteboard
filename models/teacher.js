const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    teaches:[{type:mongoose.Schema.Types.ObjectId, ref: 'Course'}],
},  {timestamps:true});

const Teacher = mongoose.model('Teacher',teacherSchema);
module.exports = Teacher;