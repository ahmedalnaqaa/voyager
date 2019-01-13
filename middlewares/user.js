const oneSignalService = require('../services/onesignal');

// update user player ID
exports.setPlayerId = function () {
    oneSignalService.createClient().then((res) => {
        res.data.id;
    });
};