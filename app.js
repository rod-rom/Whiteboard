const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Student = require('./models/student');
const Teacher = require('./models/teacher');
const Assignment = require('./models/assignment');
const mongoClient = require('mongodb').MongoClient;


//express services
const app = express();
app.use(express.json);
app.use(express.urlencoded({extended:true}));

//connect to mongodb
const url = "mongodb://127.0.0.1:27017";
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true})
    .then((result)=>app.listen(3000,()=>{console.log('Connected to MongoDB Server, running on port 3000')}))
    .catch((err)=>console.log(err));

//routes
app.post('/student/register',(req,res)=>{
    const student = new Student(req.body);
    student.save()
        .then((result)=>{res.status(200).send()})
        .catch((err)=>{res.status(400).send()})
   
});

app.post('/student/login',(req,res)=>{
    const student = new Student(req.body);
    student.equals()
        .then((result)=>{res.status(200).send();})
        .catch((err)=>{res.status(400).send()})
});
app.post('/teacher/register',(req,res)=>{
    const teacher = new Teacher(req.body);
    teacher.save()
        .then((result)=>{res.status(200).send()})
        .catch((err)=>{res.status(400).send()})
   
});

app.post('/teacher/login',(req,res)=>{
    const teacher = new Teacher(req.body);
    teacher.equals()
        .then((result)=>{res.status(200).send()})
        .catch((err)=>{res.status(400).send()})
    
});

app.get('assignments',(req,res)=>{
    const assignment = new Assignment();
    assignment.find()
        .then((result)=>res.send(result))
        .catch((err)=>res.status(400).send())
});

app.post('assignments/:name',(req,res)=>{
    const assignment = new Assignment (req.param.name);
    assignment.save()
        .then((result)=>res.status(200).send())
        .catch((err)=>res.status(400).send())
});

app.delete('assignments/:name',(req,res)=>{
    const assignment = new Assignment(req.params.name);
    Assignment.findOneAndDelete(assignment)
        .then((result)=>{
            res.status(200).send()
        })
        .catch((err)=>{
            res.status(400).send("Error removing assignment")
        })
});
