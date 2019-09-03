const merge = require('webpack-merge')

const common = require('./env/common.config')
const production = require('./env/production.config')
const develop = require('./env/develop.config')
const { errorOnUsedPort } = require('./utils')

const getMergedConfig = (env, ...args) => {
  if (env === 'production') {
    console.log('[ViewAR] Using production mode.')
    return merge(common.config, production.config)
  }

  const developConfig = merge(common.config, develop.config)
  if (env === 'development_mock') {
    console.log('[ViewAR] Using development mock mode.')
    return merge(developConfig, develop.mock)
  }

  console.log('[ViewAR] Using development core mode.')
  return merge(developConfig, develop.core)
}

/**
 * @function
 * @name @viewar/webpack/webpack.config.js
 * @returns {Promise} webpack config
 */
module.exports = async (env) => {
  if (env !== 'production') {
    await errorOnUsedPort()
  }
  return getMergedConfig(env)
}

module.exports.getMergedConfig = getMergedConfig
