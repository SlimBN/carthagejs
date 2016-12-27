'use strict';

// This will load dotenv / etc.
const fxn  = require('fxn');

let types = require('pg').types;
types.setTypeParser(20, function(val) {
  return val === null ? null : parseInt(val);
}); // 64-bit integer
types.setTypeParser(1700, function(val) {
  return val === null ? null : parseFloat(val);
}); // type NUMERIC

let Carthage = {
  API: null,
  APIResource: null,
  Application: null,
  Controller: null,
  CLI: null,
  Daemon: null,
  Database: null,
  GraphQuery: null,
  ItemArray: null,
  Migration: null,
  Mime: null,
  Model: null,
  ModelArray: null,
  ModelFactory: null,
  RelationshipGraph: null,
  Router: null,
  Scheduler: null,
  SchemaGenerator: null,
  my: {
    Config: null,
    Schema: null,
    bootstrapper: null
  },
  mocha: {
    Test: null,
    TestRunner: null
  }
};

/* Lazy Loading */

let LazyCarthage = {
  my: {},
  mocha: {},
  require: function(filename) {
    return require(process.cwd() + '/' + filename);
  },
  include: {
    mime: require('mime-types'),
    inflect: require('i')()
  },
  env: require('./env.js')()
};

Object.defineProperties(LazyCarthage, {
  API: {
    get: function() {
      return Carthage.API || (Carthage.API = require('./required/api.js'));
    },
    enumerable: true
  },
  APIResource: {
    get: function() {
      return Carthage.APIResource || (Carthage.APIResource = require('api-res'));
    }
  },
  Application: {
    get: function() {
      return Carthage.Application || (Carthage.Application = require('./required/application.js'));
    },
    enumerable: true
  },
  Controller: {
    get: function() {
      return Carthage.Controller || (Carthage.Controller = require('./required/controller.js'));
    },
    enumerable: true
  },
  CLI: {
    get: function() {
      return Carthage.CLI || (Carthage.CLI = require('../cli/cli.js'));
    },
    enumerable: true
  },
  Daemon: {
    get: function() {
      return Carthage.Daemon || (Carthage.Daemon = require('./required/daemon.js'));
    },
    enumerable: true
  },
  Database: {
    get: function() {
      return Carthage.Database || (Carthage.Database = require('./required/db/database.js'));
    },
    enumerable: true
  },
  GraphQuery: {
    get: function() {
      return Carthage.GraphQuery || (Carthage.GraphQuery = require('./required/graph_query.js'));
    },
    enumerable: true
  },
  ItemArray: {
    get: function() {
      return Carthage.ItemArray || (Carthage.ItemArray = require('./required/item_array.js'));
    },
    enumerable: true
  },
  Migration: {
    get: function() {
      return Carthage.Migration || (Carthage.Migration = require('./required/db/migration.js'));
    },
    enumerable: true
  },
  Mime: {
    get: function() {
      return Carthage.Mime || (Carthage.Mime = require('./required/mime.js'));
    },
    enumerable: true
  },
  Model: {
    get: function() {
      return Carthage.Model || (Carthage.Model = require('./required/model.js'));
    },
    enumerable: true
  },
  ModelArray: {
    get: function() {
      return Carthage.ModelArray || (Carthage.ModelArray = require('./required/model_array.js'));
    },
    enumerable: true
  },
  ModelFactory: {
    get: function() {
      return Carthage.ModelFactory || (Carthage.ModelFactory = require('./required/model_factory.js'));
    },
    enumerable: true
  },
  RelationshipGraph: {
    get: function() {
      return Carthage.RelationshipGraph || (Carthage.RelationshipGraph = require('./required/relationship_graph.js'));
    },
    enumerable: true
  },
  Router: {
    get: function() {
      return Carthage.Router || (Carthage.Router = require('./required/router.js'));
    },
    enumerable: true
  },
  Scheduler: {
    get: function() {
      return Carthage.Scheduler || (Carthage.Scheduler = require('./required/scheduler.js'));
    },
    enumerable: true
  },
  SchemaGenerator: {
    get: function() {
      return Carthage.SchemaGenerator || (Carthage.SchemaGenerator = require('./required/db/schema_generator.js'));
    },
    enumerable: true
  }
});

Object.defineProperties(LazyCarthage.my, {
  Config: {
    get: function() {
      return Carthage.my.Config || (Carthage.my.Config = require('./my/config.js'));
    },
    enumerable: true
  },
  Schema: {
    get: function() {
      return Carthage.my.Schema || (Carthage.my.Schema = require('./my/schema.js'));
    },
    enumerable: true
  },
  bootstrapper: {
    get: function() {
      return Carthage.my.bootstrapper || (Carthage.my.bootstrapper = require('./my/bootstrapper.js'));
    },
    enumerable: true
  }
});

Object.defineProperties(LazyCarthage.mocha, {
  Test: {
    get: function() {
      return Carthage.mocha.Test || (Carthage.mocha.Test = require('./mocha/test.js'));
    },
    enumerable: true
  },
  TestRunner: {
    get: function() {
      return Carthage.mocha.TestRunner || (Carthage.mocha.TestRunner = require('./mocha/test_runner.js'));
    },
    enumerable: true
  }
});

module.exports = LazyCarthage;
