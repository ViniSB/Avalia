var http = require('http');
const express = require('express')
const app = express()
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');

app.use(require('../src/routes/user-service-route'));
app.use(require('../src/routes/restaurant-service-route'));

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
 
var server = http.createServer(app);
server.listen(3000, () => console.log('Gateway rodando na porta 3000'));