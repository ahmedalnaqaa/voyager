/**
 * Request middleware
 * @param req
 * @param res
 * @param next
 */
module.exports = function(req,res,next) {
    process.env.APP_HOST = req.headers.host;
    next();
};