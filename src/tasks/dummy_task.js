'use strict';

const Mina = require('mina');

class DummyTask {

  exec(args, callback) {

    console.log('Dummy task executed');
    callback();

  }

}

module.exports = DummyTask;
