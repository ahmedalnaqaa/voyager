const os = require('os');

/**
 * Index page action.
 *
 * @param req
 * @param res
 * @param next
 */
exports.indexAction = function (req, res, next) {
    res.send(req.headers.host);
    //res.render('index', { title: 'Express JS' });
};