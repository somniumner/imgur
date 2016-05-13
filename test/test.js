require('mocha');
var assert = require('assert');
var request = require('request');
var config = require('./config');

var options = {
  headers: {
    'Authorization': 'Client-ID ' + config.clientId
  }
};

//check if imgur is working
describe('sanity check', function() {
  it('gets random gallery data using requestjs', function(done) {
    request('https://api.imgur.com/3/gallery/random/random/0.json', options, function(err,res,body) {
      assert(!err);
      assert.equal(res.statusCode, 200);
      assert.equal(JSON.parse(body).success, true);
      done();
    });
  });
});