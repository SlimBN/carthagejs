'use strict';

const Carthage = require('carthage');

class IndexController extends Carthage.Controller {

  get() {

    this.respond({message: 'Welcome to your Carthage Project'});

  }

}

module.exports = IndexController;
