const merge = require('webpack-merge')

const { errorOnUsedPort } = require('./utils')
const common = require('./configs/common.config')
const core = require('./configs/core.config')
const production = require('./configs/production.config')
const develop = require('./configs/develop.config')
const mock = require('./configs/mock.config')
const resolve = require('./webpack.config.resolve')

const getMergedConfig = (env) => {
  if (env === 'production') {
    console.log('using production mode')
    return merge(common.config, production.config)
  }

  if (env === 'development_mock') {
    console.log('using development mock mode')
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
  const config = getMergedConfig(env)

  if (env === 'lint') {
    // eslint-import-resolver-webpack doesn't hanlde Promises
    return Promise.resolve(resolve)
  }

  if (env !== 'production') {
    await errorOnUsedPort()
  }

  return config
}
