'use strict';

const Mina = require('mina');

class IndexController extends Mina.Controller {

  get() {

    this.respond({message: 'Welcome to your Mina Project'});

  }

}

module.exports = IndexController;
