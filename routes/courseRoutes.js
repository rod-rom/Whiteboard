const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.get('/',courseController.course_get);
router.get('/test',courseController.course_test);


module.exports = router;