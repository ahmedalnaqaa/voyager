/**
 * Index page action.
 *
 * @param req
 * @param res
 * @param next
 */
exports.indexAction = function (req, res, next) {
    res.render('index', { title: 'Express' });
};