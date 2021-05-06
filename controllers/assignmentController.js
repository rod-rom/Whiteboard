const Assignment = require('../models/assignment');

const assignment_get = (req,res)=>{
    Assignment.find()
        .then((assignment)=>res.status(200).send(assignment))
        .catch((err)=>res.status(400).send(err))
}
const assignment_test  = (req,res)=>{
    const assignment = new Assignment({
        name: "HW 1",
        grade: 96,
        weight: 4,
        receieved: false
    });
    assignment.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        })
}
const assignment_create = (req,res)=>{
    const assignment = new Assignment (req.param.name);
    assignment.save()
        .then((assignment)=>res.status(200).send(assignment))
        .catch((err)=>res.status(400).send(err))
}

const assignment_delete = (req,res)=>{
    const name = req.params.name;
    Assignment.findOneAndDelete({$or:[{name:name}]})
        .then((assignment)=>{res.status(200).send(assignment)})
        .catch((err)=>{res.status(400).send("Error removing assignment")})
}

module.exports = {
    assignment_get,
    assignment_test,
    assignment_create,
    assignment_delete
}