const axios = require('axios');
const crypto = require('crypto');
const deviceTypesConstants = require('../constants/deviceTypes');

/**
 * Create client on one signal
 * @param user
 * @returns {Promise|*|Promise<T | never>}
 */
exports.createClient = function (user) {
    return axios.post('https://onesignal.com/api/v1/players', {
        "app_id": process.env.ONE_SIGNAL_APP_ID,
        "device_type": user.deviceType,
        "language": user.language,
        "timezone": "+2700", // random value
        "external_user_id": ''+user._id+'',
        "identifier": generateRandomHash() //random value because it needs a real device
    }).catch((error) => {
        console.error(error)
    });
};

exports.sendNotification = function (data) {
    let message = {
        app_id: process.env.ONE_SIGNAL_APP_ID,
        contents: {[data.language]: data.message},
        include_player_ids: data.player_id,
        headings: {[data.language]: data.title},
    };
    sendNotification(message);
};

/**
 * Create random hash code for device identifier
 * @returns {string}
 */
function generateRandomHash() {
    let current_date = (new Date()).valueOf().toString();
    let random = Math.random().toString();
    return crypto.createHash('sha1').update(current_date + random).digest('hex');
}

function sendNotification (data) {
    let headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic "+process.env.ONE_SIGNAL_APP_REST_API_KEY+""
    };

    let options = {
        host: "onesignal.com",
        port: 443,
        path: "/api/v1/notifications",
        method: "POST",
        headers: headers
    };

    let https = require('https');
    let req = https.request(options, function(res) {
        res.on('data', function(data) {
            console.log("Response:");
            console.log(JSON.parse(data));
        });
    });

    req.on('error', function(e) {
        console.log("ERROR:");
        console.log(e);
    });

    req.write(JSON.stringify(data));
    req.end();
}