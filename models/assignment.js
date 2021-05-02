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
        required:true
    },
    recieved:{
        type:Boolean,
        require:true,
        default:false
    }
},  {timestamps:true});

const Assignment = mongoose.model('Assignment',assignmentSchema);
module.exports = Assignment;
