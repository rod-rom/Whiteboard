const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

router.get('/',notificationController.notification_get);

module.exports = router;