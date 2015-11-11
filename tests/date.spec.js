var tape = require('tape')
var date = require('../strategies/date')

tape('date creates a date', function (t) {
  var schema = {
    type: 'date'
  }
  t.equal(date(schema) instanceof Date, true)
  t.end()
})
