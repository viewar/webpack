const { errorOnUsedPort, setEnvVariable } = require('./utils')

const TYPE = {
  TYPE_REACT_JS:   'react-js', // Default (fallback) value.
  TYPE_REACT_TS:   'react-ts',
  TYPE_ANGULAR:    'angular',
  TYPE_ANGULAR_JS: 'angularjs',
}

const setEnvironment = (env) => {
  // TODO: switch env and mode usage (see issue #35)
  // * env should match NODE_ENV (development|production)
  // * -> move '_mock' mark to mode
  process.env.NODE_ENV = env !== 'production' ? 'development' : 'production'
  process.env.WEBPACK_ENV = env

  // inject process.env vars
  for (let [ key, value ] of Object.entries(process.env)) {
    setEnvVariable(`process.env.${key}`, value)
  }
}

/**
 * @function
 * @file @viewar/webpack/webpack.config.js
 * @name getMergedConfig
 * @returns {Promise} webpack config
 */
const getWebpackConfig = (env, args = {}) => {
  // workaround for issue #35
  if (process.NODE_ENV === 'production') {
    env = 'production'
  }

  setEnvironment(env)

  // Decide which config to load according to app.
  const type = args.type || TYPE.TYPE_REACT_JS
  process.env.WEBPACK_TYPE = type

  let reactJs
  let reactTs
  switch (type) {
    case TYPE.TYPE_REACT_JS:
      reactJs = require('./types/react-js')
      return reactJs(env)
    case TYPE.TYPE_REACT_TS:
      reactTs = require('./types/react-ts')
      return reactTs(env)
    default:
      throw new Error(`type ${args.type} not supported yet.`)
  }
};

// TODO: fix to sync instead of async (for 3rd party usage like nextjs and others)
(async () => {
  // process.NODE_ENV might not be set. Checking for WEBPACK_DEV_SERVER is safer.
  if (process.env.WEBPACK_DEV_SERVER) {
    await errorOnUsedPort()
  }
})()

module.exports = getWebpackConfig
