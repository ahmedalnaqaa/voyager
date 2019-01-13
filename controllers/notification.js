const Notification = require('../models/notification');
const notificationService = require('../services/notification');
const HttpStatus = require('http-status-codes');

/**
 * Send notification
 *
 * @param req
 * @param res
 * @param next
 */
exports.sendNotificationAction = function(req, res, next) {
    Notification.create(req.body).then(function (notification) {
        // send notification
        notificationService.sendNotification(notification);
        // return notification
        res.status(HttpStatus.CREATED).json(notification);
    }).catch(next);
};