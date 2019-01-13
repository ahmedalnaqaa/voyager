const router = require('express').Router();
const notificationController = require('../controllers/notification');

/**
 * send notification
 *
 * @route POST /notification/send
 * @group Notification - Operations about notification
 * @param {Notification.model} notification.body.required - notification object
 * @returns {object} 200 - An array of user notifications
 * @returns {Error}  default - Unexpected error
 */
router.post('/send', notificationController.sendNotificationAction);

module.exports = router;
