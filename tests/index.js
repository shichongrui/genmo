var genmo = require('../')

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

console.log(genmo(schema))
