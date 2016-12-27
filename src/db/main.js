'use strict';

const Mina = require('mina');
const db = new Mina.Database();

db.connect(Mina.my.Config.db.main);

module.exports = db;
