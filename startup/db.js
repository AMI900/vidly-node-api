const winston = require('winston');
const mongoose = require('mongoose');
const MongoClient = require('mongoose').MongoClient;
const config = require('config');

module.exports = () => {
  const db = config.get('db');

  mongoose
    .connect(db, {
      useUnifiedTopology: true,
    })
    .then(() => winston.info(`Connected to ${db}...`));
};
