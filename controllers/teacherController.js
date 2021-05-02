const Teacher = require('../models/teacher');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const teacher_register =(req,res)=>{
    const teacher = new Teacher({
        email: req.body.email,
        password:req.body.password
    });
    teacher.save()
        .then((result)=>{res.status(200).send(teacher)})
        .catch((err)=>{res.status(400).send('Could not register teacher')})
   
}

const teacher_login = (req,res)=>{
    var email = req.body.email
    var password = req.body.password
    Teacher.findOne({$or:[{email:email}]})
        .then((teacher) =>{
            if(teacher){
                bcrypt.compare(password,teacher.password,(err,result)=>{
                    if(err){
                        res.json({error:err})
                    }
                    if(result){
                        let token = jwt.sign({email:teacher.email},'SecretValue',{expiresIn:'1h'})
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

const teacher_delete = (req,res)=>{
    var email = req.params.email
    Teacher.findOneAndDelete({$or:[{email:email}]})
        .then((teacher)=>{res.status(200).send(teacher)})
        .catch((err)=>{res.status(400).send("Error removing assignment")})
}

module.exports = {
    teacher_register,
    teacher_login,
    teacher_delete
}