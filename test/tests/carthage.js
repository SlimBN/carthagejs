'use strict';

module.exports = Carthage => {

  let expect = require('chai').expect;

  describe('Carthage', function(){

    it('should exist', function() {

      expect(Carthage).to.be.an('object');

    });

    it('should have "API" object', function() {

      expect(Carthage.API).to.be.an('object');

    });

    it('should have Application constructor', function() {

      expect(Carthage.Application).to.be.a('function');

    });

    it('should have Controller constructor', function() {

      expect(Carthage.Controller).to.be.a('function');

    });

    it('should have Database constructor', function() {

      expect(Carthage.Database).to.be.a('function');

    });

    it('should have Migration constructor', function() {

      expect(Carthage.Migration).to.be.a('function');

    });

    it('should have Model constructor', function() {

      expect(Carthage.Model).to.be.a('function');

    });

    it('should have Router constructor', function() {

      expect(Carthage.Router).to.be.a('function');

    });

    it('should have SchemaGenerator constructor', function() {

      expect(Carthage.SchemaGenerator).to.be.a('function');

    });

    it('should have require method', function() {

      expect(Carthage.require).to.be.a('function');

    });

    it('should have "include" object', function() {

      expect(Carthage.include).to.be.an('object');

    });

    it('should have "my" object', function() {

      expect(Carthage.my).to.be.an('object');

    });

  });

};
