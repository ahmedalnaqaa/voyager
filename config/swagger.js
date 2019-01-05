const options = {
    swaggerDefinition: {
        info: {
            description: 'This is a documentation for the notification API endpoints',
            title: 'Notification API',
            version: '1.0.0',
        },
        host: process.env.APP_URL+':'+process.env.PORT,
        basePath: '/api',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['../routes/**/*.js'] //Path to the API handle folder
};

exports.initializeSwagger = function (app) {
    const expressSwagger = require('express-swagger-generator')(app);
    return expressSwagger(options);
};