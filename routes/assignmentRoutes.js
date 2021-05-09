const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');

router.get('/',assignmentController.assignment_get);
router.post('/',assignmentController.assignment_create);

module.exports = router;