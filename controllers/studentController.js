const Student = require('../models/student');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const student_register = (req,res)=>{
    const student = new Student({
        email:req.body.email,
        password:req.body.password
    });
    student.save()
        .then((student)=>{return res.status(200).json({message:'Register successful',student:student})})
        .catch((err)=>{return res.status(400).json({message: "Could not register student"})})
}
// const student_register = (req,res)=>{
//     const student = new Student({
//         email:req.body.email,
//         password:req.body.password
//     });
//     student.save()
//         .then((student)=>{res.status(200); res.json({message:'Register successful'})})
//         .catch((err)=>{res.status(400).send("Could not register student")})
   
// }

const student_login = (req,res)=>{
    var email = req.body.email
    var password = req.body.password
    Student.findOne({$or:[{email:email}]})
        .then((student) =>{
            if(student){
                bcrypt.compare(password,student.password,(err,result)=>{
                    if(err){
                        res.json({error:err})
                    }
                    if(result){
                        let token = jwt.sign({email:student.email},'SecretValue',{expiresIn:'1h'})
                        res.status(200)
                        res.json({message:'Login Successful',token})
                    }else{
                        res.status(400)
                        res.json({message:'Incorrect email or password'})
                    }
                })
            }else{
                res.json({message:'Invalid credentials'})
            }
        })
}

const student_delete = (req,res)=>{
    var email = req.params.email
    Student.findOneAndDelete({$or:[{email:email}]})
        .then((student)=>{res.status(200)})
        .catch((err)=>{res.status(400); res.json({message:err})})
}

const student_grade = (req,res)=>{
    const email = req.body.email;
    Student.find({$or:[{email:email}]})
        .then((student)=>{res.send(JSON.stringify(student.grade))})
        .catch((err)=>{res.status(400);res.json({message: err})})
}

module.exports = {
    student_register,
    student_login,
    student_delete,
    student_grade
}