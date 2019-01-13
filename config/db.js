const mongoose = require('mongoose');
const connectionString = `mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_NAME}`;

// connect to mongoDB
mongoose.connect(connectionString, {
    useCreateIndex: true,
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;