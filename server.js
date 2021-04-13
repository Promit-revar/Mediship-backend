'use strict';
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

const PORT = process.env.PORT || 3000;

const app = express();
const connection = connect();

connection
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

function listen() {
  if (app.get('env') === 'test') return;
  app.listen(PORT);
  console.log('Express app started on port ' + PORT);
}

function connect() {
  var options = { keepAlive: 1, useNewUrlParser: true };
  mongoose.connect(config.db, options);
  return mongoose.connection;
}
