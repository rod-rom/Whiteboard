const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    courseNumber:{
        type: Number
    },
    courseId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Course'
    },
    content:{
        type:String
    }
    
},  {timestamps:true});

const Notification = mongoose.model('Notification',notificationSchema);
module.exports = Notification;