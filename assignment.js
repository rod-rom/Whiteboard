const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
    name: {
        type:String,
        required:true,
        unique:true
    },
    grade:{
        type:Number,
        required:true
    },
    weight:{
        type:Number,
        required:false,
        default: 0
    },
    received:{
        type:Boolean,
        require:true,
        default:false
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    },
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    },
    submission:{
        type:String
    }
},  {timestamps:true});

const Assignment = mongoose.model('Assignment',assignmentSchema);
module.exports = Assignment;
