'use strict';

const Carthage = require('carthage');
const db = new Carthage.Database();

db.connect(Carthage.my.Config.db.main);

module.exports = db;
