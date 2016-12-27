'use strict';

const Command = require('cmnd').Command;
const colors = require('colors/safe');

class VersionCommand extends Command {

  constructor() {

    super('version');

  }

  help() {

    return {
      description: 'Shows your currently globally installed Mina version'
    };

  }

  run(params, callback) {

    let version = require('../../package.json').version;
    console.log(colors.green.bold('Mina Version: ') + version);

    callback(null);

  }

}

module.exports = VersionCommand;
