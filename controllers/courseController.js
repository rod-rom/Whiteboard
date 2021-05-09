const Course = require('../models/course');

const course_get = (req,res)=>{
    Course.find()
        .then((course)=>res.status(200).send(course))
        .catch((err)=>res.status(400).send(err))
}


module.exports = {
    course_get
}