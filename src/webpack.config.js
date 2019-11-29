const merge = require('webpack-merge')

const { errorOnUsedPort } = require('./utils')
const common = require('./env/common.config')
const core = require('./env/core.config')
const develop = require('./env/develop.config')
const production = require('./env/production.config')
const mock = require('./env/mock.config')

const getMergedConfig = (env) => {
  if (env === 'production') {
    return merge(common.config, production.config)
  }

  if (env === 'development_mock') {
    return merge(merge(common.config, develop.config), mock.config)
  }

  return merge(merge(common.config, develop.config), core.config)
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
