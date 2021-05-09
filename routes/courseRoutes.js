const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.get('/',courseController.course_get);


module.exports = router;