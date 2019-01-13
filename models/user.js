const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../config/db');

/**
 * @typedef User
 * @property {string} username.required - User username - eg: johndoe
 * @property {string} email.required - User email - eg: info@example.com
 * @property {string} fullName - User full name - eg: John Doe
 * @property {int} phone - User phone number - eg: 0123456789
 * @property {int} userType - User type {'rider': 1, 'customer': 2} - eg: 2
 * @property {string} language - User language - eg: en
 */
const UserSchema = new Schema({
    username: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true
    },
    fullName: {
        type: String
    },
    phone: {
        type: Number,
        required:[true, 'can\'t be blank']
    },
    userType: {
        type: Number
    },
    language: {
        type: String,
        required:[true, 'can\'t be blank'],
    },
    playerId: {
        type: String
    }
}, {
    timestamps: true
});

// schema options
UserSchema.options.toJSON = {
    transform: function(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    },
    virtuals: true
};

const User = mongoose.model('user', UserSchema);

module.exports = User;