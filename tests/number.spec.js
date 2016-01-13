var tape = require('tape')
var number = require('../strategies/number')

tape('number creates a number', function (t) {
  var schema = {
    type: 'number'
  }
  t.equal(typeof number(schema), 'number')
  t.end()
})

tape('number respects the minimum value', function (t) {
  var min = 99
  var schema = {
    type: 'number',
    minimum: min
  }
  var allAbove = true
  for (var i = 0; i < 100 && allAbove; i++) {
    allAbove = number(schema) >= min
  }

  t.equal(allAbove, true)
  t.end()
})

tape('number respects the exclusiveMinimum value', function (t) {
  var min = 99
  var schema = {
    type: 'number',
    minimum: min,
    exclusiveMinimum: true
  }
  var allAbove = true
  for (var i = 0; i < 100 && allAbove; i++) {
    allAbove = number(schema) > min
  }

  t.equal(allAbove, true)
  t.end()
})

tape('number respects the maximum value', function (t) {
  var max = 1
  var schema = {
    type: 'number',
    maximum: max
  }
  var allBelow = true
  for (var i = 0; i < 100 && allBelow; i++) {
    allBelow = number(schema) <= max
  }

  t.equal(allBelow, true)
  t.end()
})

tape('number respects the exclusiveMaximum value', function (t) {
  var max = 1
  var schema = {
    type: 'number',
    maximum: max,
    exclusiveMaximum: true
  }
  var allBelow = true
  for (var i = 0; i < 100 && allBelow; i++) {
    allBelow = number(schema) < max
  }

  t.equal(allBelow, true)
  t.end()
})

tape('number respects multipleOf value', function (t) {
  var multiple = 1.5
  var schema = {
    type: 'number',
    multipleOf: multiple
  }

  t.equal(number(schema) % multiple, 0)
  t.end()
})

tape('number returns a value from enum if present', function (t) {
  var schema = {
    type: 'integer',
    enum: [1,2,3,4,5,6,7,8,9,0]
  }
  t.notEqual(schema.enum.indexOf(number(schema)), -1)
  t.end()
})
