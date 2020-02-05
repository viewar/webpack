const merge = require('webpack-merge')

const { errorOnUsedPort, setEnvVariable, addEnvVariables } = require('./utils')
const getCommonConfig = require('./env/common.config')
const develop = require('./env/develop.config')
const production = require('./env/production.config')
const mock = require('./env/mock.config')

const getMergedConfig = (env, args) => {
  // TODO: switch env and mode usage (see issue #35)
  // * env should match NODE_ENV (development|production)
  // * -> move '_mock' mark to mode
  process.env.NODE_ENV = env !== 'production' ? 'development' : 'production'
  process.env.WEBPACK_ENV = env

  if (process.NODE_ENV === 'production') {
    // workaround for issue #35
    env = 'production'
  }

  for(let [key, value] of Object.entries(process.env)) {
    setEnvVariable(`process.env.${key}`, value);
  }

  const configCommon = getCommonConfig(env)

  if (env === 'production') {
    return merge(configCommon, production.config, addEnvVariables())
  }

  const configDev = merge(configCommon, develop.config)

  return env === 'development_mock'
    ? merge(configDev, mock.config, addEnvVariables())
    : merge(configDev, addEnvVariables())
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
