'use strict';

const Carthage = require('carthage');

class CORSMiddleware {

  exec(controller, callback) {

    controller.allowOrigin('*');
    controller.appendHeader('Access-Control-Allow-Headers', 'Authorization');
    callback(null);

  }

}

module.exports = CORSMiddleware;
