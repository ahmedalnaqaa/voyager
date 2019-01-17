/**
 * Index page action.
 *
 * @param req
 * @param res
 * @param next
 */
exports.indexAction = function (req, res, next) {
    res.send(req.protocol + '://' + req.get('host') + req.originalUrl);
};