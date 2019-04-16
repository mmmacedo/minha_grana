const MONGOOSE = require('mongoose');

MONGOOSE.Promise = global.Promise;

module.exports = MONGOOSE.connect('mongodb://localhost/mymoney');