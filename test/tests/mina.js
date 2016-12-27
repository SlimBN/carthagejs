'use strict';

module.exports = Mina => {

  let expect = require('chai').expect;

  describe('Mina', function(){

    it('should exist', function() {

      expect(Mina).to.be.an('object');

    });

    it('should have "API" object', function() {

      expect(Mina.API).to.be.an('object');

    });

    it('should have Application constructor', function() {

      expect(Mina.Application).to.be.a('function');

    });

    it('should have Controller constructor', function() {

      expect(Mina.Controller).to.be.a('function');

    });

    it('should have Database constructor', function() {

      expect(Mina.Database).to.be.a('function');

    });

    it('should have Migration constructor', function() {

      expect(Mina.Migration).to.be.a('function');

    });

    it('should have Model constructor', function() {

      expect(Mina.Model).to.be.a('function');

    });

    it('should have Router constructor', function() {

      expect(Mina.Router).to.be.a('function');

    });

    it('should have SchemaGenerator constructor', function() {

      expect(Mina.SchemaGenerator).to.be.a('function');

    });

    it('should have require method', function() {

      expect(Mina.require).to.be.a('function');

    });

    it('should have "include" object', function() {

      expect(Mina.include).to.be.an('object');

    });

    it('should have "my" object', function() {

      expect(Mina.my).to.be.an('object');

    });

  });

};
