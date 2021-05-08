const Course = require('../models/course');

const course_get = (req,res)=>{
    Course.find()
        .then((course)=>res.status(200).send(course))
        .catch((err)=>res.status(400).send(err))
}

const course_test = (req,res)=>{
    const course = new Course({
        courseName: 'Software Engineering',
        courseNumber:304
    });
    const course2 = new Course({
        courseName: 'Operating Systems',
        courseNumber:294
    });
    course.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        })
    course2.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        })
    
}
module.exports = {
    course_get,
    course_test
}