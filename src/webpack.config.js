const merge = require('webpack-merge')

const { errorOnUsedPort } = require('./utils')
const getCommonConfig = require('./env/common.config')
const core = require('./env/core.config')
const develop = require('./env/develop.config')
const production = require('./env/production.config')
const mock = require('./env/mock.config')

const getMergedConfig = (env) => {
  if (process.NODE_ENV === 'production') {
    // workaround for issue #35
    env = 'production'
  }

  const configCommon = getCommonConfig(env)

  if (env === 'production') {
    return merge(configCommon, production.config)
  }

  if (env === 'development_mock') {
    return merge(merge(configCommon, develop.config), mock.config)
  }

  return merge(merge(configCommon, develop.config), core.config)
}

(async () => {
  if (process.env.NODE_ENV !== 'production') {
    await errorOnUsedPort()
  }
})()

/**
 * @function
 * @name @viewar/webpack/webpack.config.js
 * @returns {Promise} webpack config
 */
module.exports = getMergedConfig
