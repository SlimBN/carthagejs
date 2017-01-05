

'use strict';

const Command = require('cmnd').Command;

class DBCreateCommand extends Command {

  constructor() {

    super('server', 'db', 'create');

  }

  help() {

    return {
      description: 'Create a new PostgreSQL database on the production server for the current project'
    };

  }

  run(params, callback) {

    process.env.NODE_ENV = 'production';

    const bootstrapper = require('../../../../core/my/bootstrapper.js');
    bootstrapper.create(callback);

  }

}

module.exports = DBCreateCommand;
