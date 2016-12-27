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

let Mina = {
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

let LazyMina = {
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

Object.defineProperties(LazyMina, {
  API: {
    get: function() {
      return Mina.API || (Mina.API = require('./required/api.js'));
    },
    enumerable: true
  },
  APIResource: {
    get: function() {
      return Mina.APIResource || (Mina.APIResource = require('api-res'));
    }
  },
  Application: {
    get: function() {
      return Mina.Application || (Mina.Application = require('./required/application.js'));
    },
    enumerable: true
  },
  Controller: {
    get: function() {
      return Mina.Controller || (Mina.Controller = require('./required/controller.js'));
    },
    enumerable: true
  },
  CLI: {
    get: function() {
      return Mina.CLI || (Mina.CLI = require('../cli/cli.js'));
    },
    enumerable: true
  },
  Daemon: {
    get: function() {
      return Mina.Daemon || (Mina.Daemon = require('./required/daemon.js'));
    },
    enumerable: true
  },
  Database: {
    get: function() {
      return Mina.Database || (Mina.Database = require('./required/db/database.js'));
    },
    enumerable: true
  },
  GraphQuery: {
    get: function() {
      return Mina.GraphQuery || (Mina.GraphQuery = require('./required/graph_query.js'));
    },
    enumerable: true
  },
  ItemArray: {
    get: function() {
      return Mina.ItemArray || (Mina.ItemArray = require('./required/item_array.js'));
    },
    enumerable: true
  },
  Migration: {
    get: function() {
      return Mina.Migration || (Mina.Migration = require('./required/db/migration.js'));
    },
    enumerable: true
  },
  Mime: {
    get: function() {
      return Mina.Mime || (Mina.Mime = require('./required/mime.js'));
    },
    enumerable: true
  },
  Model: {
    get: function() {
      return Mina.Model || (Mina.Model = require('./required/model.js'));
    },
    enumerable: true
  },
  ModelArray: {
    get: function() {
      return Mina.ModelArray || (Mina.ModelArray = require('./required/model_array.js'));
    },
    enumerable: true
  },
  ModelFactory: {
    get: function() {
      return Mina.ModelFactory || (Mina.ModelFactory = require('./required/model_factory.js'));
    },
    enumerable: true
  },
  RelationshipGraph: {
    get: function() {
      return Mina.RelationshipGraph || (Mina.RelationshipGraph = require('./required/relationship_graph.js'));
    },
    enumerable: true
  },
  Router: {
    get: function() {
      return Mina.Router || (Mina.Router = require('./required/router.js'));
    },
    enumerable: true
  },
  Scheduler: {
    get: function() {
      return Mina.Scheduler || (Mina.Scheduler = require('./required/scheduler.js'));
    },
    enumerable: true
  },
  SchemaGenerator: {
    get: function() {
      return Mina.SchemaGenerator || (Mina.SchemaGenerator = require('./required/db/schema_generator.js'));
    },
    enumerable: true
  }
});

Object.defineProperties(LazyMina.my, {
  Config: {
    get: function() {
      return Mina.my.Config || (Mina.my.Config = require('./my/config.js'));
    },
    enumerable: true
  },
  Schema: {
    get: function() {
      return Mina.my.Schema || (Mina.my.Schema = require('./my/schema.js'));
    },
    enumerable: true
  },
  bootstrapper: {
    get: function() {
      return Mina.my.bootstrapper || (Mina.my.bootstrapper = require('./my/bootstrapper.js'));
    },
    enumerable: true
  }
});

Object.defineProperties(LazyMina.mocha, {
  Test: {
    get: function() {
      return Mina.mocha.Test || (Mina.mocha.Test = require('./mocha/test.js'));
    },
    enumerable: true
  },
  TestRunner: {
    get: function() {
      return Mina.mocha.TestRunner || (Mina.mocha.TestRunner = require('./mocha/test_runner.js'));
    },
    enumerable: true
  }
});

module.exports = LazyMina;
