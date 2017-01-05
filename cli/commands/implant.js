'use strict';

const Command = require('cmnd').Command;

class ServerCommand extends Command {

  constructor() {

    super('implant');

  }

  help() {

    return {
      description: 'Implant a continuous instance of your Carthage Server'
    };

  }

  run(params, callback) {

    let spawn = require('cross-spawn-async');
    let child = spawn('pm2 start',  ['cluster.js -i 0'], {stdio: 'inherit'});

    process.on('exit', function() {
      child && child.kill();
    });

  }

}

module.exports = ServerCommand;
