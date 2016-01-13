var loremIpsum = require('lorem-ipsum')
var randexp = require('randexp').randexp

module.exports = function (schema) {
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
