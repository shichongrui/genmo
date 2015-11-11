var tape = require('tape')
var object = require('../strategies/object')

tape('object creates an object', function (t) {
  var schema = {
    type: 'object',
    properties: {
      prop: {
        type: 'string'
      }
    }
  }
  var model = object(schema)
  t.equal(typeof model, 'object')
  t.end()
})

tape('object can create properties of type array', function (t) {
  var schema = {
    type: 'object',
    properties: {
      prop: {
        type: 'array',
        items: {
          type: 'string'
        }
      }
    }
  }
  var model = object(schema)
  t.equal(Array.isArray(model.prop), true)
  t.end()
})

tape('object can create properties of type boolean', function (t) {
  var schema = {
    type: 'object',
    properties: {
      prop: {
        type: 'boolean'
      }
    }
  }
  var model = object(schema)
  t.equal(typeof model.prop, 'boolean')
  t.end()
})

tape('object can create properties of type date', function (t) {
  var schema = {
    type: 'object',
    properties: {
      prop: {
        type: 'date'
      }
    }
  }
  var model = object(schema)
  t.equal(model.prop instanceof Date, true)
  t.end()
})

tape('object can create properties of type integer', function (t) {
  var schema = {
    type: 'object',
    properties: {
      prop: {
        type: 'integer'
      }
    }
  }
  var model = object(schema)
  t.equal(typeof model.prop, 'number')
  t.equal(model.prop % 1, 0)
  t.end()
})

tape('object can create properties of type number', function (t) {
  var schema = {
    type: 'object',
    properties: {
      prop: {
        type: 'number'
      }
    }
  }
  var model = object(schema)
  t.equal(typeof model.prop, 'number')
  t.end()
})

tape('object can create properties of type object', function (t) {
  var schema = {
    type: 'object',
    properties: {
      prop: {
        type: 'object',
        properties: {
          prop: {
            type: 'string'
          }
        }
      }
    }
  }
  var model = object(schema)
  t.equal(typeof model.prop, 'object')
  t.end()
})

tape('object can create properties of type string', function (t) {
  var schema = {
    type: 'object',
    properties: {
      prop: {
        type: 'string'
      }
    }
  }
  var model = object(schema)
  t.equal(typeof model.prop, 'string')
  t.end()
})
