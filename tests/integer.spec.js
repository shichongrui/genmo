var tape = require('tape')
var integer = require('../strategies/integer')

tape('integer creates a number', function (t) {
  var schema = {
    type: 'integer'
  }
  t.equal(typeof integer(schema), 'number')
  t.end()
})

tape('integer creates whole numbers', function (t) {
  var schema = {
    type: 'integer'
  }
  t.equal(integer(schema) % 1, 0)
  t.end()
})
