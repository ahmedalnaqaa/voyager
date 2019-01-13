const User = require('../models/user');
const oneSignalService = require('../services/onesignal');
const notificationService = require('../services/notification');
const HttpStatus = require('http-status-codes');

/**
 * Register user action.
 *
 * @param req
 * @param res
 * @param next
 */
exports.registerUserAction = function(req, res, next) {
    User.create(req.body).then(function (user) {
        oneSignalService.createClient(user).then(function (playerId) {
            User.findByIdAndUpdate(
                {_id: user._id},
                {'playerId': playerId.data.id},
                {new: true, useFindAndModify: false}
            ).then(function (user) {
                res.status(HttpStatus.CREATED).json(user);
            });
        });
    }).catch(next);
};

/**
 * get users notifications
 *
 * @param req
 * @param res
 * @param next
 */
exports.getUserNotificationsAction = function (req, res, next) {
    notificationService.getUserNotifications(req.params.id, req.query).exec((err, notifications) => {
        res.status(HttpStatus.OK).send(notifications);
    });
};