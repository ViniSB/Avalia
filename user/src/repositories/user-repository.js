'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.create = async(data) => {

    var user = new User(data);
    await user.save();
};

exports.update = async(id, data) => {
    await User
        .findByIdAndUpdate(id, {
            $set: {
                name: data.name,
                password: data.password,
                is_restaurant: data.is_restaurant,
                favorite_food: data.favorite_food
            }
        });
}