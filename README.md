#genmo
Generate intances of a jsonschema with fake data, good for mocking data

###Usage
    var genmo = require('genmo')
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
    genmo(schema)

    /* output
    {
      string: 'Commodo est consectetur irure eiusmod fugiat nostrud.',
      number: 49.28502864204347,
      integer: 17,
      boolean: true,
      date: Tue Nov 10 2015 21:22:38 GMT-0700 (MST),
      arrayString: [
        'Sit pariatur ipsum excepteur ex fugiat cupidatat.'
      ],
      arrayNumber: [
        79.39803048502654
      ],
      arrayDate: [
        Tue Nov 10 2015 21:22:38 GMT-0700 (MST)
      ],
      arrayObject: [
        {
          string: 'Eu ullamco et incididunt deserunt pariatur elit sit amet.'
        }
      ],
      nestedObject:
        {
          number: 60.45338651165366
        }
      }
    */
