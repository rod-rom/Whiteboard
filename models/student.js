const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    totalGrade:{
        type:Number,
        default:0
    },
    courses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }],
},  {timestamps:true});

const Student = mongoose.model('Student',studentSchema);
module.exports = Student;