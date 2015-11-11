var tape = require('tape')
var string = require('../strategies/string')

tape('string creates a string', function (t) {
  var schema = {
    type: 'string'
  }
  t.equal(typeof string(schema), 'string')
  t.end()
})
