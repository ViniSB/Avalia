'use strict';

const mongoose = require('mongoose');
const Plate = mongoose.model('Plate');

exports.create = async (data) => {
    var plate = new Plate(data);
    await plate.save();
};

exports.update = async (id, data) => {
    await Plate
        .findByIdAndUpdate(id, {
            $set: {
                name: data.name,
                description: data.description,
                restaurant: data.restaurant
            }
        });
};

exports.getPlates = async (id) => {
    var res = await Plate
        .find({
            'restaurant': id
        });

    return res;
};

exports.getByPlate = async (plate) => {
    var res = await Plate
        .find({
            name: plate
        })
        .populate('restaurant');

    return res;
};