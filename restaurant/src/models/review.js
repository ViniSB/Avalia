'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    user: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    plate: {
        type: Schema.Types.ObjectId,
        ref: 'Plate'
    }
});

module.exports = mongoose.model('Review', schema);