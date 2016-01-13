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

tape('integer respects the minimum value', function (t) {
  var min = 95
  var schema = {
    type: 'integer',
    minimum: min
  }
  var allAbove = true
  for (var i = 0; i < 100 && allAbove; i++) {
    allAbove = integer(schema) >= min
  }

  t.equal(allAbove, true)
  t.end()
})

tape('integer respects the exclusiveMinimum value', function (t) {
  var min = 95
  var schema = {
    type: 'integer',
    minimum: min,
    exclusiveMinimum: true
  }
  var allAbove = true
  for (var i = 0; i < 100 && allAbove; i++) {
    allAbove = integer(schema) > min
  }

  t.equal(allAbove, true)
  t.end()
})

tape('integer respects the maximum value', function (t) {
  var max = 5
  var schema = {
    type: 'integer',
    maximum: max
  }
  var allBelow = true
  for (var i = 0; i < 100 && allBelow; i++) {
    allBelow = integer(schema) <= max
  }

  t.equal(allBelow, true)
  t.end()
})

tape('integer respects the exclusiveMaximum value', function (t) {
  var max = 5
  var schema = {
    type: 'integer',
    maximum: max,
    exclusiveMaximum: true
  }
  var allBelow = true
  for (var i = 0; i < 100 && allBelow; i++) {
    allBelow = integer(schema) < max
  }

  t.equal(allBelow, true)
  t.end()
})

tape('integer respects multipleOf value', function (t) {
  var multiple = 2
  var schema = {
    type: 'integer',
    multipleOf: multiple
  }

  t.equal(integer(schema) % multiple, 0)
  t.end()
})

tape('integer returns a value from enum if present', function (t) {
  var schema = {
    type: 'integer',
    enum: [1,2,3,4,5,6,7,8,9,0]
  }
  t.notEqual(schema.enum.indexOf(integer(schema)), -1)
  t.end()
})
