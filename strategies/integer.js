module.exports = function (schema) {
  var max = getMax(schema)
  var min = getMin(schema)
  var num = Math.floor(Math.random() * (max - min) + min)

  if (schema.multipleOf) {
    var multiple = Math.round(schema.multipleOf)
    num = num * multiple
  }

  return num
}

function getMax(schema) {
  var exclusiveMax = Boolean(schema.exclusiveMaximum)
  var max = Math.floor(schema.maximum) || 100
  if (schema.multipleOf) {
    var multiple = schema.multipleOf
    max = Math.floor(max / multiple)
  }

  return max
}

function getMin(schema) {
  var exclusiveMin = Boolean(schema.exclusiveMinimum)
  var min = Math.ceil(schema.minimum) || 0
  if (schema.multipleOf) {
    var multiple = schema.multipleOf
    min = Math.ceil(min / multiple)
  }

  // if we are excluding min, increase min by a small amount to make it
  // impossible to get it
  return min + (exclusiveMin ? 1 : 0)
}
