const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/',studentController.student_get);
router.post('/login',studentController.student_login);
router.post('/test',studentController.student_test);
module.exports = router;