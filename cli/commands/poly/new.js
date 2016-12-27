'use strict';

const Command = require('cmnd').Command;
const async = require('async');
const fs = require('fs');
const path = require('path');

const PolyCreateCommand = require('./create.js');
const PolyDBCreateCommand = require('./db/create.js');
const PolyDBAssignCommand = require('./db/assign.js');
const PolyCompileCommand = require('./compile.js');

class PolyNewCommand extends Command {

  constructor() {

    super('poly', 'new');

  }

  help() {

    return {
      description: 'Creates a new API project with associated database',
      args: ['projectName']
    };

  }

  run(params, callback) {

    let name = params.args[0];

    // for PolyCompileCommand
    params.vflags.prepare = true;

    if (!fs.existsSync(path.join(process.cwd(), '.mina'))) {
      return callback(new Error('Must run `mina poly:new` from a valid Mina project. Please try `mina new` first.'));
    }

    async.series([
      cb => PolyCreateCommand.prototype.run({args: [name], flags: params.flags, vflags: params.vflags}, cb),
      cb => PolyDBCreateCommand.prototype.run({args: [name], flags: params.flags, vflags: params.vflags}, cb),
      cb => PolyDBAssignCommand.prototype.run({args: [name, name], flags: params.flags, vflags: params.vflags}, cb),
      cb => PolyCompileCommand.prototype.run({args: [name], flags: params.flags, vflags: params.vflags}, cb)
    ], (err) => {

      if (err) {
        return callback(err);
      }

      console.log('Project created successfully!');

    });

  }

}

module.exports = PolyNewCommand;
