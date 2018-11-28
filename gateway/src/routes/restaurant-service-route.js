const express = require('express');
const app = express();
const httpProxy = require('express-http-proxy');
const userServiceProxy = httpProxy('http://localhost:3002');

// Restaurant
app.post('/restaurant', (req, res, next) => {
    userServiceProxy(req, res, next);
})

app.put('/restaurant/:id', (req, res, next) => {
    userServiceProxy(req, res, next);
})

app.get('/restaurant/location/:location', (req, res, next) => {
    userServiceProxy(req, res, next);
})

// Plate
app.post('/plate', (req, res, next) => {
    userServiceProxy(req, res, next);
})

app.put('/plate/:id', (req, res, next) => {
    userServiceProxy(req, res, next);
})

app.get('/plate/:id', (req, res, next) => {
    userServiceProxy(req, res, next);
})

app.get('/plate/search/:plate', (req, res, next) => {
    userServiceProxy(req, res, next);
})

// Review
app.post('/review/', (req, res, next) => {
    userServiceProxy(req, res, next);
})

app.get('/review/:plate', (req, res, next) => {
    userServiceProxy(req, res, next);
})

module.exports = app;