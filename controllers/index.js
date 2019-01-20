const os = require('os');

/**
 * Index page action.
 *
 * @param req
 * @param res
 * @param next
 */
exports.indexAction = function (req, res, next) {
    res.render('index', { title: 'This is voyager' });
};