const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

router.post('/register',teacherController.teacher_register);
router.post('/login',teacherController.teacher_login);
router.delete('/:email',teacherController.teacher_delete);

module.exports = router;