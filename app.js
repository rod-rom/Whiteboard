const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');
const courseRoutes = require('./routes/courseRoutes');

//express services
const app = express();
app.use(express.urlencoded({extended:true}));

//connect to mongodb
const url = "mongodb+srv://admin:123@cluster0.tdan9.mongodb.net/whiteboard?retryWrites=true&w=majority";
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true})
    .then((result)=>app.listen(2000,()=>{console.log('Connected to MongoDB Server, running on port 2000');console.log(mongoose.connection.readyState);}))
    .catch((err)=>console.log(err));

//If it returns 1 that means you're connected. If it returns 0 that means you're not connected.

//routes
app.use('/student',studentRoutes);
app.use('/teacher',teacherRoutes);
app.use('/assignment',assignmentRoutes);
app.use('/course',courseRoutes);




