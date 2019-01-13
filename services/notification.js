const Notification = require('../models/notification');
const User = require('../models/user');
const notificationTypesConstants = require('../constants/notificationTypes');
const oneSignal = require('../services/onesignal');

/**
 * get user notifications
 *
 * @param userId
 * @param parameters
 */
exports.getUserNotifications = function(userId, parameters) {
    let criteria = {};
    // include user
    criteria['users'] = userId;
    // type filter
    if (parameters.type) {
        criteria['notificationType'] = parameters.type;
    }
    // create query
    return Notification
        .find(criteria)
        .select({"users": 0})
        .populate()
    ;
};

/**
 * send notification
 *
 * @param notification
 * @returns {boolean}
 */
exports.sendNotification = function (notification) {
    switch (notification.notificationType) {
        case notificationTypesConstants.PUSH_NOTIFICATION: // push notification
            User.find()
                .where('_id')
                .select({"_id": 0,"username": 0, "email": 0, "fullName": 0, "phone": 0})
                .in(notification.users)
                .exec(function (err, users) {
                    users.forEach(function (user) {
                        let data = {
                            title: process.env.APP_TITLE,
                            message: notification.message,
                            player_id: [user.playerId],
                            language: user.language
                        };
                        oneSignal.sendNotification(data);
                    });
                });
            break;
        case notificationTypesConstants.SMS: // sms notification
            User.find()
                .where('_id')
                .select({"_id": 0,"username": 0, "email": 0, "fullName": 0, "playerId": 0})
                .in(notification.users)
                .exec(function (err, users) {
                    users.forEach(function (user) {
                        let data = {
                            title: process.env.APP_TITLE,
                            message: notification.message,
                            phone: user.phone,
                            language: user.language,
                        };
                        // call the service provider and send the SMS message
                        console.log('Send SMS message to '+data.phone+ ' with message: '+data.message);
                    });
                });
            break;
        default:
            return true;
    }
};