'use strict';

const mongoose = require('mongoose');
const Review = mongoose.model('Review');

exports.create = async(data) => {
    var review = new Review(data);
    await review.save();
};

exports.getByPlate = async(id) => {
    var res = await Review
        .find({
            'plate': id
        });

    return res;
};