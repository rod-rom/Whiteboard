const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    name: {
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        validate:(value)=>{return validator.isEmail(value)}
    },
    password:{
        type:String,
        required:true
    },
},  {timestamps:true});

const Teacher = mongoose.model('Teacher',teacherSchema);
module.exports = Teacher;