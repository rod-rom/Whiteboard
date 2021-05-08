const Student = require('../models/student');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const student_get = (req,res)=>{
    Student.find()
        .then((assignment)=>res.status(200).send(assignment))
        .catch((err)=>res.status(400).send(err))
}
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
const student_test  = (req,res)=>{
    const student = new Student({
        email: "test@gmail.com",
        password: "123",
        totalGrade: 84,
        courses: [
            "60962360c38da04368d575c3",
            "60962360c38da04368d575c2"
        ]
    });
    student.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        })
}

module.exports = {
    student_get,
    student_login,
    student_test
}
