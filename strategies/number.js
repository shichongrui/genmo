var any = require('./any')

module.exports = function (schema) {
  var value = any(schema)
  if (value) {
    return value
  }

  var max = getMax(schema)
  var min = getMin(schema)
  var num = Math.random() * (max - min) + min
  if (schema.multipleOf) {
    num = Math.floor(num) * schema.multipleOf
  }

  return num
}

function getMax(schema) {
  var exclusiveMax = Boolean(schema.exclusiveMaximum)
  var max = schema.maximum || 100
  if (schema.multipleOf) {
    var multiple = schema.multipleOf
    max = Math.floor(max / multiple)
  }

  return max
}

function getMin(schema) {
  var exclusiveMin = Boolean(schema.exclusiveMinimum)
  var min = schema.minimum || 0
  if (schema.multipleOf) {
    var multiple = schema.multipleOf
    min = Math.ceil(min / multiple)
  }

  // if we are excluding min, increase min by a small amount to make it
  // impossible to get it
  return min + (exclusiveMin ? 0.001 : 0)
}
