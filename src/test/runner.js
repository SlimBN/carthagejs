'use strict';

process.env.NODE_ENV = 'test';

const Carthage = require('carthage');
const TestRunner = Carthage.mocha.TestRunner;

const router = Carthage.require('app/router.js');

const tests = new TestRunner('./test/tests', router);

return describe('My Application', () => {

  /* Uncomment for database support */
  // before((done) => {
  //
  //   Carthage.my.bootstrapper.compose((err) => {
  //
  //     if (err) {
  //       console.error(err);
  //       throw err;
  //     }
  //
  //     done();
  //
  //   })
  //
  // });

  tests.start(require('chai').expect);

});
