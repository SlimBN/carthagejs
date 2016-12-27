'use strict';

const Carthage = require('carthage');

class IndexControllerTest extends Carthage.mocha.Test {

  test(expect) {

    it('Should return an HTTP 200', done => {

      this.endpoint('/').get((status, headers, body, json) => {

        expect(status).to.equal(200);
        done();

      });

    });

  }

}

module.exports = IndexControllerTest;
