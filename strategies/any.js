function enumeration (schema) {
  if (schema.enum) {
    return schema.enum[Math.floor(Math.random() * schema.enum.length)]
  }
}

var strategies = [
  enumeration
]

module.exports = function (schema) {
  var value = null

  for (var i = 0; i < 1 && value == null; i++) {
    value = strategies[i](schema)
  }

  return value
}
