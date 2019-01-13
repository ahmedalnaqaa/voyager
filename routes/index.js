const router = require('express').Router();
const indexController = require('../controllers/index');

/**
 * index page
 */
router.get('/', indexController.indexAction);

module.exports = router;
