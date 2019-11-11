const merge = require('webpack-merge')

const { errorOnUsedPort } = require('./utils')
const common = require('./env/common.config')
const core = require('./env/core.config')
const production = require('./env/production.config')
const mock = require('./env/mock.config')

const getMergedConfig = (env) => {
  process.env.WEBPACK_ENV = env

  const develop = require('./env/develop.config')

  if (env === 'production') {
    console.log('using production mode')
    return merge(common.config, production.config)
  }

  if (env === 'development_mock') {
    console.log('using development mock mode')
    return merge(merge(common.config, develop.config), mock.config)
  }

  console.log('using development core mode')
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
