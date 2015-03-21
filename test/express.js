var express = require('express')
  , request = require('supertest')
  , assert = require('assert')
  , should = require('should')

var app = express()

app.get('/', function(req, res) {
    res.send('Hello World')
})

describe('express', function() {

    it('should do something', function(done) {

        "0".should.be.exactly("1", "value 0")

        request(app)
            .get('/')
            .expect('Hello World!', done)
    })
})