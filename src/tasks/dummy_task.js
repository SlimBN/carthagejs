'use strict';

const Carthage = require('carthage');

class DummyTask {

  exec(args, callback) {

    console.log('Dummy task executed');
    callback();

  }

}

module.exports = DummyTask;
