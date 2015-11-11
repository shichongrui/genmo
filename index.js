var strategies = require('./strategies/')

module.exports = function(schema) {
  return strategies[schema.type](schema)
}
