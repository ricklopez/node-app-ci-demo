const request = require('supertest');
const {expect} = require('chai');
const app = require('../../server.js');

describe('GET /echo', function() {
 it('respond with hello world', function(done) {
 //navigate to root and check the the response is "hello world"
 request(app)
  .get('/echo')
  .end(function(err, res){
    expect(res.status).to.equal(200);
    expect(res.body).to.equal('hello world');
    done();
  })
 });
});

describe('GET /', function() {
 it('response includes <h1> Hello World</h1>', function(done) {
 //navigate to root and check the the response is "hello world"
 request(app)
   .get('/')
   .end(function(err, res){
    expect(res.status).to.equal(200);
    expect(res.text).to.include('<h1> Hello World</h1>');
    done();
   })
 });
});
