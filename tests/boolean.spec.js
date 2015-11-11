var tape = require('tape')
var bool = require('../strategies/boolean')

tape('boolean creates a bool', function (t) {
  var schema = {
    type: 'boolean'
  }
  t.equal(typeof bool(schema), 'boolean')
  t.end()
})
