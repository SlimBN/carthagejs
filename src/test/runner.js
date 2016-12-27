'use strict';

process.env.NODE_ENV = 'test';

const Mina = require('mina');
const TestRunner = Mina.mocha.TestRunner;

const router = Mina.require('app/router.js');

const tests = new TestRunner('./test/tests', router);

return describe('My Application', () => {

  /* Uncomment for database support */
  // before((done) => {
  //
  //   Mina.my.bootstrapper.compose((err) => {
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
