var tape = require('tape')
var validate = require('jsonschema').validate
var genmo = require('../')

tape('genmo will produce models that validate against the schema', function (t) {
  var schema = {
    type: 'object',
    properties: {
      string: {
        type: 'string'
      },
      number: {
        type: 'number'
      },
      integer: {
        type: 'integer'
      },
      boolean: {
        type: 'boolean'
      },
      date: {
        type: 'date'
      },
      arrayString: {
        type: 'array',
        items: {
          type: 'string'
        }
      },
      arrayNumber: {
        type: 'array',
        items: {
          type: 'number'
        }
      },
      arrayDate: {
        type: 'array',
        items: {
          type: 'date'
        }
      },
      arrayObject: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            string: {
              type: 'string'
            }
          }
        }
      },
      nestedObject: {
        type: 'object',
        properties: {
          number: {
            type: 'number'
          }
        }
      }
    }
  }

  var model = genmo(schema)
  t.equal(validate(model, schema).errors.length, 0)
  t.end()
})
