'use strict'

const express = require('express');
const bodyParser =  require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

// Conecta ao banco
mongoose.connect(config.connectionString);

// Carrega ao models
const Restaurant = require('./models/restaurant');
const Plate = require('./models/plate');
const Review = require('./models/review');

// Carrega as rotas
const restaurantRoute = require('./routes/restaurant-route');
const plateRoute = require('./routes/plate-route');
const reviewRoute = require('./routes/review-route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/restaurant', restaurantRoute);
app.use('/plate', plateRoute);
app.use('/review', reviewRoute);

module.exports = app;