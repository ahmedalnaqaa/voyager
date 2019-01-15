/**
 * Index page action.
 *
 * @param req
 * @param res
 * @param next
 */
exports.indexAction = function (req, res, next) {
    res.send(process.env.APP_TITLE);
    //res.render('index', { title: 'Express' });
};