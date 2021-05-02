const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');
const mongoClient = require('mongodb').MongoClient;


//express services
const app = express();
app.use(express.json);
app.use(express.urlencoded({extended:true}));

//connect to mongodb
const url = "mongodb://127.0.0.1:27017/whiteboard";
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true})
    .then((result)=>app.listen(3000,()=>{console.log('Connected to MongoDB Server, running on port 3000');console.log(mongoose.connection.readyState);}))
    .catch((err)=>console.log(err));

//If it returns 1 that means you're connected. If it returns 0 that means you're not connected.

//routes
app.use('/students',studentRoutes);
app.use('/teacher',teacherRoutes)
app.use('/assignment',assignmentRoutes);





