var tape = require('tape')
var string = require('../strategies/string')

tape('string creates a string', function (t) {
  var schema = {
    type: 'string'
  }
  t.equal(typeof string(schema), 'string')
  t.end()
})

tape('string respects max character limit', function (t) {
  var schema = {
    type: 'string',
    maxLength: 10
  }
  var allBelow = true
  for (var i = 0; i < 100; i++) {
    allBelow = string(schema).length <= schema.maxLength
  }
  t.equal(allBelow, true)
  t.end()
})

tape('string respects min character limit', function (t) {
  var schema = {
    type: 'string',
    minLength: 5
  }
  var allAbove = true
  for (var i = 0; i < 100; i++) {
    allAbove = string(schema).length > schema.minLength
  }
  t.equal(allAbove, true)
  t.end()
})

tape('string will generate matches for regular expressions', function (t) {
  var regex = '^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
  var schema = {
    type: 'string',
    pattern: regex
  }
  var s = string(schema)
  t.equal(new RegExp(regex).test(s), true)
  t.end()
})

tape('string returns a value from enum if present', function (t) {
  var schema = {
    type: 'integer',
    enum: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  }
  t.notEqual(schema.enum.indexOf(string(schema)), -1)
  t.end()
})
