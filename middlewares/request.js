module.exports = function(req,res,next) {
    process.env.APP_HOST = req.headers.host;
    next();
};