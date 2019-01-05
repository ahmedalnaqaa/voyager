let express = require('express');
let router = express.Router();

/**
 * send notification
 *
 * @route POST /notification/send
 * @group Notification - Operations about notification
 * @returns {object} 200 - An array of user notifications
 * @returns {Error}  default - Unexpected error
 */
router.post('/send', function(req, res, next) {
  console.log('hey user');
  res.status(202).send('Post d');
});

module.exports = router;
