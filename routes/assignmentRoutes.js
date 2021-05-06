const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');

router.get('/',assignmentController.assignment_get);
router.get('/add',assignmentController.assignment_test);
router.post('/',assignmentController.assignment_create);
router.delete('/:name',assignmentController.assignment_delete);

module.exports = router;