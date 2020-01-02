const merge = require('webpack-merge')

const { errorOnUsedPort } = require('./utils')
const getCommonConfig = require('./env/common.config')
const develop = require('./env/develop.config')
const production = require('./env/production.config')
const mock = require('./env/mock.config')

const getMergedConfig = (env, args) => {
  // TODO: switch env and mode usage (see issue #35)
  // * env should match NODE_ENV (development|production)
  // * -> move '_mock' mark to mode
  process.env.NODE_ENV = args.env !== 'production' ? 'development' : 'production'
  process.env.WEBPACK_ENV = args.env

  if (process.NODE_ENV === 'production') {
    // workaround for issue #35
    env = 'production'
  }

  const configCommon = getCommonConfig(env)

  if (env === 'production') {
    return merge(configCommon, production.config)
  }

  const configDev = merge(configCommon, develop.config)

  return env === 'development_mock'
    ? merge(configDev, mock.config)
    : configDev
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
