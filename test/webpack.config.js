const merge = require('webpack-merge')

const configViewAr = require('../index.js')

module.exports = async (...args) => {
  // configViewAr is ASYNC!
  const config = await configViewAr(...args)
  return merge(config, {
  })
}
