let express = require('express');
let router = express.Router();

/**
 * GET user notifications
 *
 * @route GET /user/{id}/notifications
 * @group User - Operations about user
 * @param {int} id.path
 * @returns {object} 200 - An array of user notifications
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id/notifications', function(req, res, next) {
  res.send('user: '+ req.params.id + ' notifications');
});

module.exports = router;
