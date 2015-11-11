var tape = require('tape')
var array = require('../strategies/array')

tape('array by default only creates one item', function (t) {
  var schema = {
    type: 'array',
    items: {
      type: 'string'
    }
  }
  var model = array(schema)
  t.equal(model.length, 1)
  t.end()
})

tape('creates arrays of strings', function (t) {
  var schema = {
    type: 'array',
    items: {
      type: 'string'
    }
  }
  var model = array(schema)
  t.equal(typeof model[0], 'string')
  t.end()
})

tape('creates arrays of boolens', function (t) {
  var schema = {
    type: 'array',
    items: {
      type: 'boolean'
    }
  }
  var model = array(schema)
  t.equal(typeof model[0], 'boolean')
  t.end()
})

tape('creates arrays of dates', function (t) {
  var schema = {
    type: 'array',
    items: {
      type: 'date'
    }
  }
  var model = array(schema)
  t.equal(model[0] instanceof Date, true)
  t.end()
})

tape('creates arrays of integers', function (t) {
  var schema = {
    type: 'array',
    items: {
      type: 'integer'
    }
  }
  var model = array(schema)
  t.equal(typeof model[0], 'number')
  t.equal(model[0] % 1, 0)
  t.end()
})

tape('creates arrays of numbers', function (t) {
  var schema = {
    type: 'array',
    items: {
      type: 'number'
    }
  }
  var model = array(schema)
  t.equal(typeof model[0], 'number')
  t.end()
})

tape('creates arrays of objects', function (t) {
  var schema = {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        string: {
          type: 'string'
        }
      }
    }
  }
  var model = array(schema)
  t.equal(typeof model[0], 'object')
  t.end()
})

tape('creates arrays of arrays', function (t) {
  var schema = {
    type: 'array',
    items: {
      type: 'array',
      items: {
        type: 'string'
      }
    }
  }
  var model = array(schema)
  t.equal(Array.isArray(model[0]), true)
  t.end()
})
