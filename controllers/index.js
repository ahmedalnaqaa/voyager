/**
 * Index page action.
 *
 * @param req
 * @param res
 * @param next
 */
exports.index = function (req, res, next) {
    res.render('index', { title: 'Express' });
};