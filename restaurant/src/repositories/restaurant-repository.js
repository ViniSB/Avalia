'use strict';

const mongoose = require('mongoose');
const Restaurant = mongoose.model('Restaurant');

exports.getById = async(id) => {
    const res = await Product
        .findById(id);
    return res;
}

exports.create = async(data) => {
    var restaurant = new Restaurant(data);
    await restaurant.save();
};

exports.update = async(id, data) => {
    await Restaurant
        .findByIdAndUpdate(id, {
            $set: {
                name: data.name,
                location: data.location
            }
        });
};

exports.getPlates = async(id) => {
    const res = await Restaurant
        .findById(id)
        .populate('plates');

    return res;
};

exports.getByPlate = async(plate) => {
    const res = await Restaurant
        .find({
            'plates.name': plate
        });

    return res;
};

exports.getByLocation = async(location) => {
    const res = await Restaurant
        .find({
            location: location
        });

    return res;
};

exports.getByRating = async(id) => {
    const res = await Restaurant
        .findById(id)
        .populate({
            path: 'plates',
            options: {
                sort: { 'rating': 1 }
            }
        });

    return res;
};