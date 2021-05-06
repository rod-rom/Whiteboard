const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/register',studentController.student_register);
router.post('/login',studentController.student_login);
router.delete('/:email',studentController.student_delete);

module.exports = router;