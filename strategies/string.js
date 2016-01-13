var loremIpsum = require('lorem-ipsum')
var randexp = require('randexp').randexp
var any = require('./any')

module.exports = function (schema) {
  var value = any(schema)
  if (value) {
    return value
  }

  var minLength = schema.minLength || 1
  var maxLength = schema.maxLength || minLength + 10
  var pattern = schema.pattern

  if (pattern) {
    return randexp(pattern)
  } else {
    var string = loremIpsum({
      count: maxLength
    })
    return string.substr(0, Math.floor(Math.random() * maxLength + 1) + minLength  )
  }
}
