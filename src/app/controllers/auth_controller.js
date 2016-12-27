'use strict';

const Mina = require('mina');

class AuthController extends Mina.Controller {

  authorize(callback) {

    this.setHeader('Cache-Control', 'no-store');
    this.setHeader('Pragma', 'no-cache');

    callback(null);

  }

}

module.exports = AuthController;
