var test = require('tape');
var u = require('../.');

test('pathForUri should return path from openapi definition', function (t) {
  var api = require('./fixtures/api.json');
  t.plan(6);
  var s = u.pathForUri(api, '/animals/bla/cats', 'get');
  t.equal(s, '/animals/{par1}/cats', 'path with 1 par should be returned');
  s = u.pathForUri(api, '/animals/cats', 'get');
  t.equal(s, '/animals/cats', 'path without pars is returned');
  s = u.pathForUri(api, '/animals/catsAndDogs', 'get');
  t.equal(s, '/animals/catsAndDogs', 'path without pars is returned');
  s = u.pathForUri(api, '/animals/bla/cats/xx');
  t.equal(s, '/animals/{par1}/cats/{par2}', 'path with 2 pars is returned');
  s = u.pathForUri(api, '/animals/bla/dogs');
  t.equal(s, '/animals/{par1}/dogs', 'path with 1 par is returned');
  s = u.pathForUri(api, '/animals/bla/dogs/x');
  t.equal(s, '/animals/{par1}/dogs/{par2}', 'path with 2 pars is returned');
  t.end();
});

