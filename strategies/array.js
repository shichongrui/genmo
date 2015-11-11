module.exports = function (schema) {
  var strategies = require('./index')
  return [strategies[schema.items.type](schema.items)]
}
