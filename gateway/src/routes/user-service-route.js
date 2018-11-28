const express = require('express');
const app = express();
const httpProxy = require('express-http-proxy');
const userServiceProxy = httpProxy('http://localhost:3001');

app.get('/user', (req, res, next) => {
    userServiceProxy(req, res, next);
})

app.post('/user', (req, res, next) => {
    userServiceProxy(req, res, next);
})

app.put('/user/:id', (req, res, next) => {
    userServiceProxy(req, res, next);
})

module.exports = app;