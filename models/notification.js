const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../config/db');
const notificationTypesConstants = require('../constants/notificationTypes');

/**
 * @typedef Notification
 * @property {int} notificationType - Notification type {'push notification': 1, 'sms': 2} - eg: 1
 * @property {string} message - Notification message - eg: welcome to swvl
 * @property {array}  users - Array of users - eg: []
 */
const NotificationSchema = new Schema({
        notificationType: {
            type: Number,
            required: [true, 'can\'t be blank'],
        },
        message: {
            type: String,
            required: [true, 'can\'t be blank'],
        },
        users: [{type: mongoose.Schema.ObjectId, ref: 'User'}]
}, {
    timestamps: true
});

// add notification type label virtual property
NotificationSchema.virtual('notificationTypeLabel').get(function () {
    return notificationTypesConstants.getLabel(this.notificationType);
});

// schema options
NotificationSchema.options.toJSON = {
    transform: function(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.notificationType;
    },
    virtuals: true
};

const Notification = mongoose.model('notification', NotificationSchema);
module.exports = Notification;