'use strict';

const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    is_restaurant: {
        type: Boolean,
        required: true
    },
    favorite_food: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', schema);