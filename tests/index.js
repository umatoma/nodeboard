/**
* Express application test
*/
var assert = require('assert');
var request = require('supertest');

describe('express', function() {
  var app;

  beforeEach(function() {
    app = require('../app.js');
  });

  describe('GET /users', function() {
    it('can access', function(done) {
      request(app)
        .get('/users')
        .expect(200, done);
    });
  });
});