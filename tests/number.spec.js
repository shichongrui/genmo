var tape = require('tape')
var number = require('../strategies/number')

tape('number creates a number', function (t) {
  var schema = {
    type: 'number'
  }
  t.equal(typeof number(schema), 'number')
  t.end()
})
