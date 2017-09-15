const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../models/database');

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// mongoose.model('{name-of-the-model}', {schema-name} );
const User = modules.exports = mongoose.model('User', UserSchema);

/**
 * If we want to use functions outside we would need to use
 * modules.exports.{function-name}
 **/
modules.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
};

modules.exports.getUserByName = function (username, callback) {
    const query = {username: username};
    User.findOne(query, callback);
};