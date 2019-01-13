const router = require('express').Router();
const userController = require('../controllers/user');

/**
 * get user notifications
 *
 * @route GET /user/{id}/notifications
 * @group User - Operations about user
 * @param {string} id.path.required - user ID
 * @param {integer} type.query - notification type {'push notification': 1, 'sms': 2} - eg: 1
 * @returns {object} 200 - An array of user notifications
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id/notifications', userController.getUserNotificationsAction);

/**
 * create user
 *
 * @route POST /user/register
 * @group User - Operations about user
 * @param {User.model} user.body.required - user object
 * @returns {object} 200 - An array of user notifications
 * @returns {Error}  default - Unexpected error
 */
router.post('/register', userController.registerUserAction);

module.exports = router;
