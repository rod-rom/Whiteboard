const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    courseName: {
        type:String,
    },
    courseNumber:{
        type:Number,
    },
    assignments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Assignment'
    }],
},  {timestamps:true});

const Course = mongoose.model('Course',courseSchema);
module.exports = Course;