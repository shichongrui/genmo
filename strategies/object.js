module.exports = function (schema) {
  var strategies = require('./index')
  var model = {}
  Object.keys(schema.properties).forEach(function (property) {
    var propertySchema = schema.properties[property]
    model[property] = strategies[propertySchema.type](propertySchema)
  })
  return model
}
